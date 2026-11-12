

const express = require('express');
const { getUsers ,updateUser} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect,getUsers);
router.route('/:id').put(protect, updateUser);

module.exports = router;
