import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Marketplace.css';

function Marketplace() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const handleAddItemClick = () => {
    navigate('/CreateItem');
  }

  return (
    <div className="marketplace-container">
      <button onClick={handleAddItemClick} className="postButton">Post an item</button>
      <div className="filter-sidebar">
        <h3>Filter by:</h3>

        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search items..." 
        />

        {/* Difficulty Filter */}
        <label>Category:</label>
        <select>
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Difficult">Difficult</option>
        </select>

        {/* Type Filter */}
        <label>Price:</label>
        <select>
          <option value="">All</option>
          <option value="Succulent">Succulent</option>
          <option value="Herb">Herb</option>
          <option value="Vine">Vine</option>
          <option value="Flower">Flower</option>
          <option value="Ficus">Ficus</option>
          <option value="Fern">Fern</option>
          <option value="Palm">Palm</option>
          <option value="Foliage Plant">Foliage Plant</option>
          <option value="Epiphyte">Epiphyte</option>
          <option value="Bromeliad">Bromeliad</option>
          <option value="Conifer">Conifer</option>
          <option value="Tropical Plant">Tropical Plant</option>
          <option value="Cactus">Cactus</option>
          <option value="Dracaena">Dracaena</option>
        </select>
      </div>

      <div className="items-main-content">
        <div className="items-container">
          {/* {items.map(plant => (
            <div key={plant._id} className="item-card">
              <h3>{plant.name}</h3>
              <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
              <p><strong>Water Frequency:</strong> {plant.waterFrequency}</p>
              <p><strong>Difficulty:</strong> {plant.difficulty}</p>
              <p><strong>Sunlight:</strong> {plant.sunlight}</p>
              <p><strong>Type:</strong> {plant.type}</p>
              <p>{plant.about}</p>
              <button>+</button>
            </div>
          ))} */}
        </div>
      </div>
    </div>
    // <div>
    //   <h2>Marketplace</h2>
    //   <div>
    //     <img src="path_to_image.jpg" alt="Item Name" />
    //     <div>Item Name</div>
    //     <button>Express Interest</button>
    //   </div>
    // </div>
  );
}

export default Marketplace;

