import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const AddFlightForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ flightNumber: '', to: '', from: '', date: '', terminal: '' });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        flightNumber: editingTask.flightNumber,
        to: editingTask.to,
        from: editingTask.from,
        date: editingTask.date,
        terminal: editingTask.terminal,
      });
    } else {
      setFormData({ flightNumber: '',from: '',to: '',date: '',terminal: '' });
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        const response = await axiosInstance.put(`/api/flights/${editingTask._id}`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setTasks(tasks.map((task) => (task._id === response.data._id ? response.data : task)));
      } else {
        const response = await axiosInstance.post('/api/flights', formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setTasks([...tasks, response.data]);
      }
      setEditingTask(null);
      setFormData({ flightNumber: '',from: '',to: '',date: '',terminal: '' });
    } catch (error) {
      alert('Failed to save task.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded mb-6">
      <h1 className="text-2xl font-bold mb-4">{editingTask ? 'Your Form Name: Edit Operation' : 'Your Form Name: Create Operation'}</h1>
      <input
        type="text"
        placeholder="Flight Number"
        value={formData.flightNumber}
        onChange={(e) => setFormData({ ...formData, flightNumber: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="From"
        value={formData.from}
        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="To"
        value={formData.to}
        onChange={(e) => setFormData({ ...formData, to: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
       <input
        type="text"
        placeholder="Terminal"
        value={formData.terminal}
        onChange={(e) => setFormData({ ...formData, terminal: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        {editingTask ? 'Update Button' : 'Create Button'}
      </button>
    </form>
  );
};

export default AddFlightForm;
