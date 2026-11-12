import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const EditUserForm = ({ users, setUsers, editingUser, setEditingUser }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', address: ''});

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        mobile: editingUser.mobile,
        address: editingUser.address,
       
      });
    } else {
      setFormData({ name: '', email: '', mobile: '', address: ''});
    }
  }, [editingUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        const response = await axiosInstance.put(`/api/users/${editingUser._id}`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setUsers(users.map((user) => (user._id === response.data._id ? response.data : user)));
      } else {
        const response = await axiosInstance.post('/api/users', formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setUsers([...users, response.data]);
      }
      setEditingUser(null);
      setFormData({ name: '', email: '', mobile: '', address: ''});
    } catch (error) {
      alert('Failed to save task.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded mb-6">
      <h1 className="text-2xl font-bold mb-4">{editingUser ? 'Update User' : 'Create User'}</h1>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Mobile"
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      
       <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        {editingUser ? 'Update user' : 'Create user'}
      </button>
    </form>
  );
};

export default EditUserForm;
