import { useNavigate } from 'react-router-dom';

const AdminHomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 text-center">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="flex justify-center gap-10">

        <button
          onClick={() => navigate('/manageuser')}
          className="bg-blue-600 text-white px-10 py-6 rounded-lg text-xl hover:bg-blue-700"
        >
          Manage Users
        </button>

        <button
          onClick={() => navigate('/manageflights')}
          className="bg-green-600 text-white px-10 py-6 rounded-lg text-xl hover:bg-green-700"
        >
          Manage Flights
        </button>

      </div>

    </div>
  );
};

export default AdminHomePage;

