const express = require('express');
const {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
  getLowStockItems
} = require('../controllers/itemController');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.use(authenticateToken);

router.post('/', createItem);
router.get('/', getItems);
router.get('/low-stock', getLowStockItems);
router.get('/:id', getItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;