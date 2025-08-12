const Item = require('../models/Item');
const logger = require('../config/logger');

const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    logger.info(`Item created: ${item.name}`);
    res.status(201).json(item);
  } catch (error) {
    logger.error('Create item error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const getItems = async (req, res) => {
  try {
    const filters = {
      category: req.query.category,
      lowStock: req.query.lowStock === 'true'
    };
    
    const items = await Item.findAll(filters);
    res.json(items);
  } catch (error) {
    logger.error('Get items error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    logger.error('Get item error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateItem = async (req, res) => {
  try {
    const item = await Item.update(req.params.id, req.body);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    logger.info(`Item updated: ${item.name}`);
    res.json(item);
  } catch (error) {
    logger.error('Update item error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.delete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    logger.info(`Item deleted: ${item.name}`);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    logger.error('Delete item error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const getLowStockItems = async (req, res) => {
  try {
    const items = await Item.getLowStockItems();
    res.json(items);
  } catch (error) {
    logger.error('Get low stock items error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
  getLowStockItems
};