// CareReminder.js

import React from 'react';
import { useState, useEffect } from 'react';
import './CareReminder.css';
import Reminderinput from './Reminderinput';
import Reminder from './Reminder';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';



function CareReminder() {
    const { user } = useAuth();
    const [reminder, setReminder] = useState([]);

    // Add state variables to store input values
    const [plant, setPlant] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(new Date());
    const [interval, setInterval] = useState('');

    const handlePlantChange = (newPlant) => {
        setPlant(newPlant);
    };

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleIntervalChange = (newInterval) => {
        setInterval(newInterval);
    };



    //Getting reminder
    useEffect(() => {
        const fetchReminder = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/user/${user.username}/reminder`);
                if (response.status === 200) {
                    setReminder(response.data);
                }
            } catch (error) {
                console.error("Error fetching reminder entries:", error.message);
            }
        };
        fetchReminder();
    }, []);

    const formsubmitHandler = event => {
        event.preventDefault();
        console.log(plant, content, date, interval);
        const addreminder = async () => {
            try {
                const response = await axios.post(`http://localhost:3001/user/${user.username}/reminder`, { plant, content, date, interval });
                if (response.status === 201) {
                    alert('Reminder added successfully!');
                    const newEntry = { plant, content, date, interval };
                    setReminder(prevEntries => [newEntry, ...prevEntries]);
                 
                } else {
                    alert('Error adding reminder.');
                }
            } catch (error) {
                alert('Error adding reminder:', error.message);
            }
        }
        addreminder();
    }

   
    return (
        <div className='carereminder-container'>
            <h3 data-testid="add-reminder-test">Add Reminder</h3>
        <form className="carereminder-contianer-form" onSubmit={formsubmitHandler}>
            
            <div className='carereminder-contianer-content' data-testid="reminder-input">
            
                <Reminderinput
                    data-testid="plant-input"
                    id="plant"
                    element="input"
                    type="text"
                    label="Plant"
                    value={plant}
                    onChange={handlePlantChange}
                    errorText="Please enter a valid title."
                />

                <Reminderinput
                    data-testid="content-input"
                    id="content"
                    element="input"
                    type="text"
                    label="Content"
                    value={content}
                    onChange={handleContentChange}
                    errorText="Please enter a valid content."
                />
                <Reminderinput
                    data-testid="date-input"
                    id="date"
                    element="input"
                    type="date"
                    label="Date"
                    value={date}
                    onChange={handleDateChange}
                    errorText="Please enter a valid date."
                />
                <Reminderinput
                    data-testid="interval-input"
                    id="interval"
                    element="input"
                    type="number"
                    label="interval"
                    value={interval}
                    onChange={handleIntervalChange}
                    errorText="Please enter a valid interval."
                />

           </div>
        <button >
            Add
        </button>

        </form>
        <div className='carereminder-container-todayreminder'>
            <h2 data-testid="water-today-test">Water Today</h2>
            <Reminder // Add a unique key for each Reminder component
                key=""
                heading="true"
                plant=""
                content=""
                date={new Date()}
                interval=""
            />
            {reminder
            .filter(reminder => {
                const storedDate = new Date(reminder.date);
                const todayDate = new Date();
                const timeDifference = Math.abs(todayDate - storedDate);
                const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Calculate the time difference in days
            
                // Adjust the condition to check if the days difference is a multiple of the reminder interval
                return daysDifference > 0 && daysDifference % reminder.interval === 0;
            })
            .map((reminder, index) => (
                <Reminder
                key={index} // Add a unique key for each Reminder component
                plant={reminder.plant}
                content={reminder.content}
                date={reminder.date}
                interval={reminder.interval}
                />
            ))}
        </div>
        <div className='carereminder-container-allreminder'>
            <h2 data-testid="all-plant-test">All Plant water Reminder</h2>
            <Reminder // Add a unique key for each Reminder component
                key=""
                heading="true"
                plant=""
                content=""
                date={new Date()}
                interval=""
            />
            {reminder.map((reminder, index) => (
                <Reminder
                key={index} // Add a unique key for each Reminder component
                heading="false"
                plant={reminder.plant}
                content={reminder.content}
                date={reminder.date}
                interval={reminder.interval}
                button={<button onClick={() => {
                    const deletereminder = async () => {
                        try {
                            const response = await axios.delete(`http://localhost:3001/user/${user.username}/reminder/${reminder.plant}`);
                            if (response.status === 200) {
                                alert('Reminder deleted successfully!');
                                setReminder(prevEntries => prevEntries.filter(entry => entry.plant !== reminder.plant));
                            } else {
                                alert('Error deleting reminder.');
                            }
                        } catch (error) {
                            alert('Error deleting reminder:', error.message);
                        }
                    }
                    deletereminder();
                }}>Delete</button>}
                />
            ))}
        </div>


        </div>
    );
}

export default CareReminder;

