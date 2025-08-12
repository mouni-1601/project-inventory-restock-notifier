-- Create database
CREATE DATABASE inventory_db;

-- Connect to the database
\c inventory_db;

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create items table
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    quantity INTEGER NOT NULL DEFAULT 0,
    threshold INTEGER NOT NULL DEFAULT 10,
    category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_items_quantity ON items(quantity);
CREATE INDEX idx_items_category ON items(category);
CREATE INDEX idx_users_email ON users(email);

-- Insert sample data
INSERT INTO users (username, email, password, phone) VALUES
('rajesh_admin', 'rajesh@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9876543210');

INSERT INTO items (name, description, quantity, threshold, category) VALUES
('Packing Tape', 'Heavy duty packing tape', 8, 10, 'Supplies'),
('Laptop Dell XPS', 'High-performance laptop', 5, 10, 'Electronics'),
('Office Chair', 'Ergonomic office chair', 3, 5, 'Furniture'),
('Printer Paper', 'A4 white paper', 15, 20, 'Supplies'),
('USB Cable', 'USB-C charging cable', 2, 15, 'Electronics'),
('Desk Lamp', 'LED desk lamp', 8, 10, 'Furniture');