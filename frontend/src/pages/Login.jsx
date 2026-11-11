import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
      if(!formData.email || !formData.password)
      {
        alert('Please enter email id and password');
        return;
      }
      //Code to validate email id
      if(!formData.email.includes('@') || !formData.email.includes('.'))
      {
        setEmailError('Please enter valid email address');
        return;
      }
      setEmailError('');
      

    try {
      const response = await axiosInstance.post('/api/auth/login', formData);
      login(response.data);
      console.log("Login Page");
      console.log(response.data);
      navigate('/homepage');
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcone To Flight Booking Tracker!</h1>
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
        />
        {emailError && (<p className="text-red-500 text-sm mb-4">{emailError}</p>)
        }
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
