import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
      
    if(!formData.email || !formData.password || !formData.name)
      {
        alert('Please fill all the fields');
        return;
      }    
    
      if(!formData.email.includes('@') || !formData.email.includes('.'))
      {
        setEmailError('Please enter valid email address');
        return;
      }
      setEmailError('');
      if(formData.password.length < 10)
      {
        setPasswordError('Please enter a string password with at least 10 characters');
        return;
      }
      setPasswordError('');






    try {
      await axiosInstance.post('/api/auth/register', formData);
      alert('Registration successful. Please log in.');
      navigate('/login');
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcone To Flight Booking Tracker!</h1>
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
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
        {emailError && (<p className="text-red-500 text-sm mb-4">{emailError}</p>)
        }
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
        />
        {passwordError && (<p className="text-red-500 text-sm mb-4">{passwordError}</p>)
        }
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
