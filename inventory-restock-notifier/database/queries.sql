-- Essential Database Queries for Inventory Restock Notifier

-- 1. USER AUTHENTICATION QUERIES
-- Register new user
INSERT INTO users (username, email, password, phone) 
VALUES ($1, $2, $3, $4) 
RETURNING id, username, email, phone, created_at;

-- Login - find user by email
SELECT * FROM users WHERE email = $1;

-- Get user by ID
SELECT id, username, email, phone FROM users WHERE id = $1;

-- 2. ITEM MANAGEMENT QUERIES
-- Create new item
INSERT INTO items (name, description, quantity, threshold, category) 
VALUES ($1, $2, $3, $4, $5) 
RETURNING *;

-- Get all items
SELECT * FROM items ORDER BY created_at DESC;

-- Get items with category filter
SELECT * FROM items WHERE category = $1 ORDER BY created_at DESC;

-- Get low stock items only
SELECT * FROM items WHERE quantity <= threshold ORDER BY quantity ASC;

-- Get items with filters (category + low stock)
SELECT * FROM items 
WHERE ($1::text IS NULL OR category = $1) 
AND ($2::boolean IS NULL OR $2 = false OR quantity <= threshold)
ORDER BY created_at DESC;

-- Get single item by ID
SELECT * FROM items WHERE id = $1;

-- Update item
UPDATE items 
SET name = $1, description = $2, quantity = $3, threshold = $4, category = $5, updated_at = NOW() 
WHERE id = $6 
RETURNING *;

-- Delete item
DELETE FROM items WHERE id = $1 RETURNING *;

-- 3. RESTOCK NOTIFICATION QUERIES
-- Get all low stock items for notifications
SELECT * FROM items WHERE quantity <= threshold ORDER BY quantity ASC;

-- Count low stock items
SELECT COUNT(*) as low_stock_count FROM items WHERE quantity <= threshold;

-- Get critical stock items (quantity = 0)
SELECT * FROM items WHERE quantity = 0;

-- 4. REPORTING QUERIES
-- Items by category
SELECT category, COUNT(*) as item_count, 
       SUM(quantity) as total_quantity,
       COUNT(CASE WHEN quantity <= threshold THEN 1 END) as low_stock_count
FROM items 
GROUP BY category;

-- Stock status summary
SELECT 
  COUNT(*) as total_items,
  COUNT(CASE WHEN quantity <= threshold THEN 1 END) as low_stock_items,
  COUNT(CASE WHEN quantity = 0 THEN 1 END) as out_of_stock_items,
  AVG(quantity) as avg_quantity
FROM items;

-- 5. MAINTENANCE QUERIES
-- Update all thresholds for a category
UPDATE items SET threshold = $1 WHERE category = $2;

-- Bulk update quantities (for restocking)
UPDATE items SET quantity = quantity + $1, updated_at = NOW() WHERE id = $2;

-- Clean up old logs (if implementing audit trail)
DELETE FROM audit_logs WHERE created_at < NOW() - INTERVAL '90 days';