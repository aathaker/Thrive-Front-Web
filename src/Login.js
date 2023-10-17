import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LogIn = () => {
    const navigate = useNavigate();
    const { setUser, setIsLoggedIn, isLoggedIn } = useAuth();
    const [errorMessage, setErrorMessage] = useState(null);
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userData.username || !userData.password) {
            alert('Both username and password are required.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/login', userData);
        
            if (response.status === 200) {
                if (!response.data.user) {
                    console.error('User data is not present in the response');
                    alert('Error logging in. Please try again.');
                    return;
                }
                setUser(response.data.user);
                console.log('User logged in successfully:', response.data.user);
                setIsLoggedIn(true);
                navigate('/');  
            } else if (response.status === 400) {
                alert('Invalid request. Please check your input.');
                console.error('Error logging in:', response.data.message);
            } else if (response.status === 401) {
                alert('Invalid username or password.');
                console.error('Error logging in:', response.data.message);
            } else {
                alert('Unknown error occurred. Please try again.');
                console.error('Error logging in:', response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.status === 500) {
                alert('Server error. Please try again later.');
            } else if (error.response && error.response.status === 404) {
                alert('Login endpoint not found.');
            } else {
                alert('Unknown error occurred. Please try again.');
            }
            console.error('Error logging in:', error.message);
        }
    };


    const navigateToSignUp = () => {
        navigate('/signup');
    };
  

    const handleLogout = async () => {
        try {
            const response = await axios.get('http://localhost:3001/logout');
            if (response.status === 200) {
                setUser(null);
                setIsLoggedIn(false);
                alert('Logged out successfully!');
                navigate('/login');
            } else {
                alert('Error logging out. Please try again.');
            }
        } catch (error) {
            console.error('Error logging out:', error.message);
            alert('Error logging out. Please try again.');
        }
    };


    return (
        <div>
            <h2>Log In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={userData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <button type="submit">Log In</button>
            </form>
            <button onClick={navigateToSignUp}>Don't have an account? Sign Up</button>
        </div>
    );
}

export default LogIn;

