# Packing Tape Restock Example

## Scenario
Let's say you have an item called "Packing Tape":
- **Current stock**: 8 units
- **Minimum threshold**: 10 units
- Since 8 < 10, the system will trigger a notification to alert staff that this item needs to be restocked.

## How It Works in the System

### 1. Database Entry
```sql
INSERT INTO items (name, description, quantity, threshold, category) VALUES
('Packing Tape', 'Heavy duty packing tape', 8, 10, 'Supplies');
```

### 2. Low Stock Detection
The system automatically detects low stock using this query:
```sql
SELECT * FROM items WHERE quantity <= threshold;
```

### 3. Frontend Alert
When you login to the dashboard, you'll see:
- **Red Alert Box**: "⚠️ Low Stock Alert - X items need restocking!"
- **Detailed Message**: "Packing Tape: Current stock 8 units < Minimum threshold 10 units"
- **Visual Indicators**: Red background for low stock rows in the table

### 4. API Endpoint
Backend provides low stock data via:
```
GET /api/items/low-stock
```

### 5. Real-time Monitoring
- Dashboard shows live stock levels
- Automatic alerts when items drop below threshold
- Visual status indicators (Low Stock vs In Stock)

## Testing the Example

1. **Start the application**
2. **Login** with admin credentials
3. **View Dashboard** - you'll see the Packing Tape alert
4. **Check the table** - Packing Tape row will be highlighted in red
5. **Filter by "Low Stock Only"** - Packing Tape will appear in results

This demonstrates the core functionality of the Inventory Restock Notifier system!