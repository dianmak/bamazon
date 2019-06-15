const mysql = require("mysql");
const inquirer = require("inquirer");


const connection = mysql.createConnection({
    host: "localhost",

    port: 8889,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    display();

    // purchase();
});

function purchase() {
    inquirer.prompt([{
        name: "productID",
        type: "number",
        message: "Please input the ID of the product you wish to purchase.",
    },
    {
        name: "quantity",
        type: "number",
        message: "How many would you like to purchase?"
    }]).then(function (answer) {
        makePurchase(answer);
    })
}

function makePurchase(answer) {
    console.log(answer);
    connection.query("SELECT stock_quantity, price FROM products WHERE ?", { item_id: answer.productID }, function (err, res) {
        if (err) throw err;
        let q = res[0].stock_quantity;
        let p = res[0].price;

        if (answer.quantity > q) {
            console.log("Apologies, our stock quantity of this item is not sufficient to fulfill your purchase.")
        }
        else {
            let newquantity = q - answer.quantity;
            connection.query("UPDATE products SET ? WHERE ? ", [{ stock_quantity: newquantity }, { item_id: answer.productID }], function (err) {
                if (err) throw err;
                let total = answer.quantity * p;

                console.log("Purchase completed. You spent $" + total);
            });
        }
    });
}

function display() {
    connection.query("SELECT * from products", function (err, res) {
        for (let i = 0; i < res.length; i++) {
            let item = res[i];
            console.log(`Item ID: ${item.item_id}  ||  Product: ${item.product_name}  ||  Department: ${item.department_name}  || Price: $${item.price}  ||  Stock: ${item.stock_quantity}`);
        }

        purchase();
    });

}