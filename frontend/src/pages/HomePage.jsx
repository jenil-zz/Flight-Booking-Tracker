import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { user } = useAuth();
  const [flights, setFlights] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
        
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get('/api/flights', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        //setTasks(response.data);
        setFlights(response.data);
      } catch (error) {
        //alert('You have no Flights available for tracking');
        console.error(error);
      }
    };

    fetchTasks();
  }, [user]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-20 text-center">Flight Dashboard</h1>
     
      {flights.length === 0 ? (<p className="text-gray-600 text-center">No Flight Available</p>) : ( 
        <table className="w-full border border-gray-300">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border p-2">Flight Number</th>
              <th className="border p-2">From</th>
              <th className="border p-2">To</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Terminal</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight._id}>
                <td className="border p-2">{flight.flightNumber}</td>
                <td className="border p-2">{flight.from}</td>
                <td className="border p-2">{flight.to}</td>
                <td className="border p-2">{flight.date}</td>
                <td className="border p-2">{flight.terminal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}          
    </div>
  );
};

export default HomePage;
