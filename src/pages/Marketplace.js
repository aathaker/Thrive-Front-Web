import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Marketplace.css';

function Marketplace() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  // const [itemPrice, setItemPrice] = useState(0);

  useEffect(() => {
      const fetchItemData = async () => {
          let theUrl = `http://localhost:3001/api/market?search=${searchWord}`;
          if(itemCategory){theUrl += `&category=${itemCategory}`;}
          // if(itemPrice){theUrl += `&price=${itemPrice}`;}
          try {
            const response = await axios.get(theUrl);
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
  }, [searchWord, itemCategory]);

  const handleAddItemClick = () => {
    navigate('/CreateItem');
  }

  const showMyItems = () => {
    navigate('/MyPurchases');
  }

  const buyItem = async (theItemId, theItemOwner) => {
    // console.log(user.username);
    if(theItemOwner===user.username){
      alert("Can't buy your item!");
      return;
    }
    else{
      try {
        const response = await axios.get(`http://localhost:3001/market/purchase/${user.username}/${theItemId}`);
        if(response.data.message == "Item already sold"){
          alert("Can't buy a SOLD item!");
        }
        else{
          alert("Bought the Item!")
        }
       } 
       catch (error) {
        console.error('Error creating item:', error.response ? error.response.data.message : error.message);
      }
    }
  }

  return (
    <div className="marketplace-container">
      <button onClick={handleAddItemClick} className="postButton">Post an item</button>
      <button onClick={showMyItems} className="myItems">Bought items</button>
      <div className="filter-sidebar">
        <h3>Filter by:</h3>

        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search items..." 
          value={searchWord} 
          onChange={(e) => setSearchWord(e.target.value)} 
        />

        {/* Difficulty Filter */}
        <label>Category:</label>
        <select value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
          <option value="">All</option>
          <option value="clothes">Clothes</option>
          <option value="tools">Tools</option>
          <option value="plants">Plants</option>
          <option value="vehicles">Vehicles</option>
          <option value="organics">Organics</option>
        </select>

        {/* Type Filter
        <label>Price:</label>
        <select value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}>
          <option value="">All</option>
          <option value="0-100">0-100</option>
          <option value="100-500">100-500</option>
          <option value="500-1000">500-1000</option>
          <option value="1000-5000">1000-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000-">10000+</option>
        </select> */}
      </div>

      <div className="items-main-content">
        <div className="items-container">
        {items.map(items => (
            <div key={items._id} className="items-card">
              <h3>{items.itemName}</h3>
              <p><strong>Seller:</strong> {items.userName}</p>
              <p><strong>Price:</strong> {items.price}</p>
              <p><strong>Category:</strong> {items.category}</p>
              <p><strong>Status:</strong> {items.status}</p>
              <button onClick={() => buyItem(items._id, items.userName)}>Buy!</button>
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

