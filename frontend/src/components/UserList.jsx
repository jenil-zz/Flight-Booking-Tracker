import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const UserList = ({ users, setUsers, setEditingUser }) => {
  const { user } = useAuth();

  const handleDelete = async (userId) => {
    console.log("Inside delete");
    console.log(userId);
    try {
      await axiosInstance.delete(`/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      alert('Failed to delete task.');
    }
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user._id} className="bg-gray-100 p-4 mb-4 rounded shadow">
          <h2 className="font-bold">{user.name}</h2>
          <p>{user.email}</p>
          <p className="text-sm text-gray-500">mobile: {user.mobile}</p>
          <div className="mt-2">
            <button
              onClick={() => setEditingUser(user)}
              className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
