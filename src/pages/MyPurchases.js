import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './MyPurchases.css';

function MyPurchases(){
    const { user } = useAuth();
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchasedData = async () => {
            let theUrl = `http://localhost:3001/market/${user.username}/purchases`;
            try {
              const response = await axios.get(theUrl);
              if (response.status === 200) {
                setPurchases(response.data);

              } else {
                  console.error('Error fetching market data.');
              }
            } catch (error) {
                console.error('Error fetching market data:', error.message);
            }
        }
  
        fetchPurchasedData();
    }, []);

    return (
        <div className="purchase-container">    
          <div className="purchase-main-content">
            <div className="purchase-container">
            {purchases.map(purchases => (
                <div key={purchases._id} className="purchase-card">
                  <h3>{purchases.itemName}</h3>
                  <p><strong>Seller:</strong> {purchases.userName}</p>
                  <p><strong>Price:</strong> {purchases.price}</p>
                  <p><strong>Category:</strong> {purchases.category}</p>
                  <p><strong>Status:</strong> {purchases.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default MyPurchases;