import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';



const SignUp = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();
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

        try {
            const response = await axios.post('http://localhost:3001/signup', userData);
            console.log("SignUp component rendered");

            if (response.status === 200) {
                setUser(response.data.user); 
                console.log('User registered successfully:', response.data.user);
            } else {
                console.error('Error registering user:', response.data.message);
            }
    } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data.message : error.message);
}

    };

    const navigateToLogin = () => {
        navigate('/login'); 
    };

    const navigateToLanding = () => {
        navigate('/landing');
    };
    
    return (
    <div className="signup-container">
        <div className="signup-left">
            <Link to="/landing" className="signup-thrive-text">Thrive</Link>
        </div>
        <div className="signup-right">
            <div className="signup-box">
                <h2 className="signup-heading">Create Account</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <input
                        className="signup-input"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={userData.username}
                        onChange={handleChange}
                    />
                    <input
                        className="signup-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    <button className="signup-btn" type="submit">Sign Up</button>
                </form>
                <button className="login-redirect-btn" onClick={navigateToLogin}>Already have an account? Log In</button>
                <Link to="/landing" className="signup-back">Back to Landing Page</Link>
            </div>
        </div>
    </div>
);


}

export default SignUp;

