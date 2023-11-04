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
          <option value="clothes">Clothes</option>
          <option value="tools">Tools</option>
          <option value="plants">Plants</option>
          <option value="vehicles">Vehicles</option>
          <option value="organics">Organics</option>
        </select>

        {/* Type Filter */}
        <label>Price:</label>
        <select>
          <option value="">All</option>
          <option value="1strange">0-100</option>
          <option value="2ndrange">100-500</option>
          <option value="3rdrange">500-1000</option>
          <option value="4thrange">1000-5000</option>
          <option value="5thrange">5000-10000</option>
          <option value="6thrange">10000+</option>
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

