-- Update Users and Passwords in PostgreSQL Database

-- Connect to database
\c inventory_db;

-- Method 1: Update existing users
UPDATE users SET 
    username = 'newadmin',
    email = 'newadmin@company.com',
    password = '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    phone = '+9876543210'
WHERE email = 'admin@warehouse.com';

-- Method 2: Delete all users and insert new ones
DELETE FROM users;

-- Insert new users with new credentials
INSERT INTO users (username, email, password, phone) VALUES
('john_admin', 'john@company.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+1111111111'),
('sarah_manager', 'sarah@company.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+2222222222'),
('mike_staff', 'mike@company.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+3333333333');

-- Verify changes
SELECT id, username, email, phone FROM users;