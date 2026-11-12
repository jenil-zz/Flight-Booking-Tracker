

const express = require('express');
const { getFlights, addFlight, deleteFlight ,updateFlight,getAllFlights} = require('../controllers/flightController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getFlights).post(protect, addFlight);
router.route('/:id').put(protect, updateFlight).delete(protect, deleteFlight);
router.get('/all', protect, getAllFlights);

module.exports = router;
