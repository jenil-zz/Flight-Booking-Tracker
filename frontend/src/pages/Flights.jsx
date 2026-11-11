import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import AddFlightForm from '../components/AddFlightForm';
import FlightList from '../components/FlightList';
import { useAuth } from '../context/AuthContext';

const Tasks = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {

       console.log('useEffect running');
  console.log('user:', user);
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get('/api/flights', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setTasks(response.data);
      } catch (error) {
        alert('You have no Flights available for tracking');
      }
    };

    fetchTasks();
  }, [user]);

  return (
    // <div className="container mx-auto p-6">
    //   <TaskForm
    //     tasks={tasks}
    //     setTasks={setTasks}
    //     editingTask={editingTask}
    //     setEditingTask={setEditingTask}
    //   />
    //   <TaskList tasks={tasks} setTasks={setTasks} setEditingTask={setEditingTask} />
    // </div>

    <div className="container mx-auto p-6">
      <AddFlightForm
        tasks={tasks}
        setTasks={setTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <FlightList tasks={tasks} setTasks={setTasks} setEditingTask={setEditingTask} />
    </div>
  );
};

export default Tasks;
