CREATE DATABASE buy_and_sell;
USE buy_and_sell;

CREATE TABLE listings (
    id VARCHAR(36) PRIMARY KEY,       -- Handles both numeric IDs and UUIDs
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    seller_id INT NOT NULL,
    stock INT NOT NULL
);

INSERT INTO listings (id, name, description, price, seller_id, stock) VALUES
('10', 'Bookshelf', 'Tall wooden bookshelf, fits 100+ books.', 60.00, 12345, 30),
('123', 'guitar', 'A beautiful acoustic guitar in excellent condition', 199.99, 12345, 12),
('124', 'Air con', 'Very cold', 100.00, 12346, 3),
('125', 'bicycle', 'Mountain bike in great condition, barely used', 249.99, 12347, 0),
('126', 'piano', 'Yamaha upright piano - perfect for beginners', 599.00, 12345, 5),
('127', 'camera', 'Canon DSLR with multiple lenses', 799.99, 12349, 12),
('2', 'Mountain Bike', 'Lightweight trail bike suitable for all terrains.', 650.00, 12345, 98),
('22263ede-3dbb-4175-a5d9-cba8cd4e0ca8', 'Tuxedo', 'Like new! Perhaps..', 100.00, 12345, 6),
('3', 'MacBook Pro 2019', '15-inch laptop with Retina display, works perfectly.', 950.00, 12345, 123),
('4', 'Electric Guitar', 'Fender Stratocaster with amp and case.', 450.00, 12345, 76),
('5', 'Coffee Table', 'Solid oak coffee table, modern design.', 85.00, 12345, 32),
('6', 'Gaming Chair', 'Ergonomic racing-style chair, black and red.', 150.00, 12345, 55),
('7', 'Smartphone Samsung S21', '128GB storage, nearly new, with case.', 500.00, 12345, 63),
('8', 'AirPods Pro', 'Noise-cancelling earbuds, mint condition.', 180.00, 12345, 89),
('9', 'Electric Scooter', 'Foldable scooter, 25km range.', 400.00, 12345, 73);
