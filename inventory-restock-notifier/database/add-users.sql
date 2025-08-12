-- Add Different Users to Inventory System
-- Password for all users: 'password' (hashed with bcrypt)

INSERT INTO users (username, email, password, phone) VALUES
('priya_manager', 'priya@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '8765432109'),
('amit_staff', 'amit@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '7654321098'),
('sneha_supervisor', 'sneha@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9123456789'),
('vikram_clerk', 'vikram@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '8234567890'),
('kavya_assistant', 'kavya@warehouse.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9345678901');

-- Verify users added
SELECT id, username, email, phone FROM users;