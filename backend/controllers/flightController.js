const Flight = require('../models/Flight');
const getFlights = async (req, res) => {
try {
const flights = await Flight.find({ userId: req.user.id });
res.json(flights);
} catch (error) {
res.status(500).json({ message: error.message });
}
};



const addFlight = async (req, res) => {
const { flightNumber, to, from, date, terminal} = req.body;
try {
const flight = await Flight.create({ userId: req.user.id, flightNumber, to, from, date, terminal });
res.status(201).json(flight);
} catch (error) {
res.status(500).json({ message: error.message });
}
};


const updateFlight = async (req, res) => {
const { flightNumber, to, from, date, terminal } = req.body;
try {
const flight = await Flight.findById(req.params.id);
if (!flight) return res.status(404).json({ message: 'Flight not found' });
flight.flightNumber = flightNumber|| flight.flightNumber ;
flight.to = to|| flight.to ;
flight.from = from|| flight.from ;
flight.date = date|| flight.date ;
flight.terminal = terminal|| flight.terminal ;
const updatedFlight = await flight.save();
res.json(updatedFlight);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

const deleteFlight = async (req, res) => {
try {
const flight = await Flight.findById(req.params.id);
if (!flight) return res.status(404).json({ message: 'Flight not found' });
await flight.remove();
res.json({ message: 'Flight deleted' });
} catch (error) {
res.status(500).json({ message: error.message });
}
};


const getAllFlights = async (req, res) => {
try {
const flights = await Flight.find();
res.json(flights);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

module.exports = { getFlights,addFlight,deleteFlight,updateFlight,getAllFlights};