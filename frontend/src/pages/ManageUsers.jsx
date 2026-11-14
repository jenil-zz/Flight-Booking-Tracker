import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';

import { useAuth } from '../context/AuthContext';
import UserList from '../components/UserList';
import EditUserForm from '../components/EditUserForm';

const ManageUsers = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  const [editingUser, setEditingUser] = useState(null);

  

  useEffect(() => {
        
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/api/users', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
     
        setUsers(response.data);
      } catch (error) {
        //alert('You have no Flights available for tracking');
        console.error(error);
      }
    };

    fetchUsers();
  }, [user]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-20 text-center">Admin Dashboard</h1>

      <div className="container mx-auto p-6">
      <EditUserForm
        users={users}
        setUsers={setUsers}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />
      <UserList users={users} setUsers={setUsers} setEditingUser={setEditingUser} />
    </div>
    </div>
  );
};

export default ManageUsers;
