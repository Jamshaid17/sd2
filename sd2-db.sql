-- Check if the database 'sd2' exists, and if not, create it
CREATE DATABASE IF NOT EXISTS sd2;

-- Use the 'sd2' database
USE sd2;

-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Create login table if it doesn't exist
CREATE TABLE IF NOT EXISTS login (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);


-- Create products table if it doesn't exist
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  link TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert products if the table is empty
INSERT INTO products (name, price, description, link)
VALUES
  ('Product 1', 49.99, 'Description for Product 1', '/img/11.jpg'),
  ('Product 2', 29.99, 'Description for Product 2', '/img/12.jpg'),
  ('Product 3', 19.99, 'Description for Product 3', '/img/13.jpg'),
  ('Product 4', 59.99, 'Description for Product 4', '/img/14.jpg'),
  ('Product 5', 39.99, 'Description for Product 5', '/img/15.jpg'),
  ('Product 6', 69.99, 'Description for Product 6', '/img/16.jpg');

-- Create cart table if it doesn't exist
CREATE TABLE IF NOT EXISTS cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id)
);
