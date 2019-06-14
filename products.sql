DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;
USE bamazon;
CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL (10, 2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);
INSERT INTO
  products (
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  (
    "Albus Dumbledore's Favorite Pair of Socks",
    "Objects of Magical Beings",
    1000000,
    1
  ),
  (
    "Snitch Caught by Harry Potter",
    "Objects of Magical Beings",
    150,
    7
  ),
  (
    "Gameboy Used by Groot",
    "Objects of Magical Beings",
    600,
    3
  ),
  (
    "BFG's Jar",
    "Objects of magical Beings",
    30,
    5000
  ),
  ("Muesli", "Breakfast", 7, 50),
  ("Shakshuka", "Breakfast", 9, 65),
  ("Overnight Oats", "Breakfast", 5, 80),
  ("Rubber Duck", "Coding Necessities", 1, 800),
  ("Eyedrops", "Coding Necessities", 2, 1000),
  ("Chill Pill", "Coding Necessities", 3, 1500);