const User = require('../models/User');
const getUsers = async (req, res) => {
try {
const users = await User.find().select('-password');
res.json(users);
} catch (error) {
res.status(500).json({ message: error.message });
}
};



const updateUser = async (req, res) => {
const { name,email,mobile,address} = req.body;
try {
const user = await User.findById(req.params.id);
if (!user) return res.status(404).json({ message: 'User not found' });
user.name = name || user.name ;
user.email = email || user.email ;
user.mobile = mobile || user.mobile ;
user.address = address || user.address ;
const updatedUser = await user.save();
res.json(updatedUser);
} catch (error) {
res.status(500).json({ message: error.message });
}
};




module.exports = {getUsers,updateUser};