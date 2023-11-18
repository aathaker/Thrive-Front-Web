import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Marketplace.css';

function Marketplace() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState(0);

  useEffect(() => {
      const fetchItemData = async () => {
          try {
              const response = await axios.get(`http://localhost:3001/market/item`);
              if (response.status === 200) {
                // console.log(response.data);
                setItems(response.data);
              } else {
                  console.error('Error fetching market data.');
              }
          } catch (error) {
              console.error('Error fetching market data:', error.message);
          }
      }

      fetchItemData();
  }, []);

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
          {items.map(items => (
            <div key={items._id} className="items-card">
              <h3>{items.itemName}</h3>
              <p><strong>Item Name:</strong> {items.itemName}</p>
              <p><strong>Seller:</strong> {items.userName}</p>
              <p><strong>Price:</strong> {items.price}</p>
              <p><strong>Category:</strong> {items.category}</p>
            </div>
          ))}
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

