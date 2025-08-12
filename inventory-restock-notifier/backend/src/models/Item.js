const pool = require('../config/database');

class Item {
  static async create(itemData) {
    const { name, description, quantity, threshold, category } = itemData;
    
    const query = `
      INSERT INTO items (name, description, quantity, threshold, category)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    
    const result = await pool.query(query, [name, description, quantity, threshold, category]);
    return result.rows[0];
  }

  static async findAll(filters = {}) {
    let query = 'SELECT * FROM items WHERE 1=1';
    const params = [];
    let paramCount = 0;

    if (filters.category) {
      paramCount++;
      query += ` AND category = $${paramCount}`;
      params.push(filters.category);
    }

    if (filters.lowStock) {
      query += ' AND quantity <= threshold';
    }

    query += ' ORDER BY created_at DESC';
    
    const result = await pool.query(query, params);
    return result.rows;
  }

  static async findById(id) {
    const query = 'SELECT * FROM items WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async update(id, itemData) {
    const { name, description, quantity, threshold, category } = itemData;
    
    const query = `
      UPDATE items 
      SET name = $1, description = $2, quantity = $3, threshold = $4, category = $5, updated_at = NOW()
      WHERE id = $6
      RETURNING *
    `;
    
    const result = await pool.query(query, [name, description, quantity, threshold, category, id]);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM items WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async getLowStockItems() {
    const query = 'SELECT * FROM items WHERE quantity <= threshold ORDER BY quantity ASC';
    const result = await pool.query(query);
    return result.rows;
  }
}

module.exports = Item;