import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import HomePage from './pages/HomePage';
import ManageUsers from './pages/ManageUsers';
import AdminHomePage from './pages/AdminHomePage';
import ManageFlights from './pages/ManageFlights';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/manageuser" element={<ManageUsers />} />
        <Route path="/adminhomepage" element={<AdminHomePage />} />
        <Route path="/manageflights" element={<ManageFlights />} />
      </Routes>
    </Router>
  );
}

export default App;
