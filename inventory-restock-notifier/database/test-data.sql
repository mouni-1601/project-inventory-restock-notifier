-- Test Data for Inventory Restock Notifier

-- Connect to database
\c inventory_db;

-- Insert test users with Indian phone numbers
INSERT INTO users (username, email, password, phone) VALUES
('rajesh_admin', 'rajesh@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9876543210'),
('priya_manager', 'priya@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '8765432109'),
('amit_staff', 'amit@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '7654321098'),
('sneha_supervisor', 'sneha@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9123456789'),
('vikram_clerk', 'vikram@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '8234567890');

-- Insert test items with various stock levels
INSERT INTO items (name, description, quantity, threshold, category) VALUES
-- Low stock items (need restocking)
('Packing Tape', 'Heavy duty packing tape', 8, 10, 'Supplies'),
('Laptop Dell XPS', 'High-performance laptop', 5, 10, 'Electronics'),
('Office Chair', 'Ergonomic office chair', 3, 5, 'Furniture'),
('USB Cable', 'USB-C charging cable', 2, 15, 'Electronics'),
('Desk Lamp', 'LED desk lamp', 8, 10, 'Furniture'),

-- Normal stock items
('Printer Paper', 'A4 white paper', 50, 20, 'Supplies'),
('Monitor 24"', '24-inch LED monitor', 25, 10, 'Electronics'),
('Keyboard', 'Wireless keyboard', 30, 15, 'Electronics'),
('Mouse', 'Optical wireless mouse', 40, 20, 'Electronics'),

-- Out of stock items (critical)
('Stapler', 'Heavy duty stapler', 0, 5, 'Supplies'),
('Whiteboard', 'Magnetic whiteboard', 0, 3, 'Supplies'),

-- Various categories
('Coffee Machine', 'Office coffee maker', 2, 3, 'Appliances'),
('Water Cooler', 'Water dispenser', 1, 2, 'Appliances'),
('Filing Cabinet', '4-drawer filing cabinet', 12, 8, 'Furniture'),
('Projector', 'HD projector', 6, 5, 'Electronics'),
('Printer Ink', 'Black ink cartridge', 15, 25, 'Supplies');