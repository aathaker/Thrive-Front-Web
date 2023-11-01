import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './UserGarden.css';

function UserGarden() {
    const [plants, setPlants] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGardenData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/user/${user.username}/garden`);
                if (response.status === 200) {
                    setPlants(response.data);
                } else {
                    console.error('Error fetching garden data.');
                }
            } catch (error) {
                console.error('Error fetching garden data:', error.message);
            }
        }

        fetchGardenData();
    }, [user.username]);


    const handleAddPlantsClick = () => {
        navigate('/directory');
    }


    const handleDeletePlant = async (plantId) => {
        try {
            await axios.delete(`http://localhost:3001/user/${user.username}/garden/${plantId}`);
            setPlants(plants.filter(plant => plant._id !== plantId));
        } catch (error) {
            console.error('Error deleting plant:', error.message);
        }
    }


    return (
        <div className="user-garden-container">
            {plants.length === 0 ? (
                <div>
                    <p>You don't have any plants yet.</p>
                    <button onClick={handleAddPlantsClick}>Add Plants to Your Garden</button>
                </div>
            ) : (
                plants.map(plant => (
                    <div key={plant._id} className="plant-card">
                        <h3>{plant.name}</h3>
                        <button onClick={() => handleDeletePlant(plant._id)}>Delete Plant</button>
                        <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
                        <p><strong>Water Frequency:</strong> {plant.waterFrequency}</p>
                        <p><strong>Difficulty:</strong> {plant.difficulty}</p>
                        <p><strong>Sunlight:</strong> {plant.sunlight}</p>
                        <p><strong>Type:</strong> {plant.type}</p>
                        <p><strong>About:</strong> {plant.about}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default UserGarden;

