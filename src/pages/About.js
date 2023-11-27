// About.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './About.css';

function About() {
    const { user } = useAuth();
    const [isEditMode, setIsEditMode] = useState(false);
    const [aboutData, setAboutData] = useState({
        title: '',
        journey: '',
        whatIDo: '',
        contactInfo: ''
    });

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                if (user && user.username) {
                    const response = await axios.get(`http://localhost:3001/user/${user.username}/about`);
                    if (response.data) {
                        setAboutData(response.data);
                    }
                }
            } catch (error) {
                console.error("Error fetching about information:", error);
            }
        };

        fetchAboutData();
    }, [user]); 

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };

    const handleSaveClick = async () => {
        try {
            if (user && user.username) {
                const response = await axios.put(`http://localhost:3001/user/${user.username}/about`, aboutData);
                if (response.status === 200) {
                    alert('About information updated successfully!');
                } else {
                    alert('Error updating about information.');
                }
            }
        } catch (error) {
            alert('Error updating about information:', error.message);
        }
        setIsEditMode(false);
    };

    const handleChange = (e) => {
        setAboutData({
            ...aboutData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="about-container">
            {isEditMode ? (
                <>
                    <label htmlFor="title">About Me</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={aboutData.title} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="journey">My Journey</label>
                    <textarea 
                        name="journey" 
                        value={aboutData.journey} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="whatIDo">What I Do</label>
                    <textarea 
                        name="whatIDo" 
                        value={aboutData.whatIDo} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="contactInfo">Get In Touch</label>
                    <textarea 
                        name="contactInfo" 
                        value={aboutData.contactInfo} 
                        onChange={handleChange} 
                    />
                    <button onClick={handleSaveClick}>Save</button>
                </>
            ) : (
                <>
                    <h1>{aboutData.title}</h1>
                    <h2>My Journey</h2>
                    <p>{aboutData.journey}</p>
                    <h2>What I Do</h2>
                    <p>{aboutData.whatIDo}</p>
                    <h2>Get In Touch</h2>
                    <p>{aboutData.contactInfo}</p>
                    <button onClick={handleEditClick}>Edit</button>
                </>
            )}
        </div>
    );
}

export default About;
