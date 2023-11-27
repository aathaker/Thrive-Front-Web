import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './CreateItem.css';

function CreateItem() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [itemData, setItemData] = useState({
        theUser: user.username,
        itemname: '',
        price: '',
        category: '',
        status: 'SALE'
    });

    const handleNameChange = (event) => {
        setItemData({ ...itemData, itemname: event.target.value });
      };

    const handlePriceChange = (event) => {
        setItemData({ ...itemData, price: event.target.value });
    };

    const handleCategoryChange = (event) => {
        setItemData({ ...itemData, category: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { theUser, itemname, price, category,  status} = itemData;
        console.log(`User: ${theUser}, Name: ${itemname}, Price: ${price}, Category: ${category}, 
        Stat: ${status}`);

        try {
            const response = await axios.post('http://localhost:3001/market/item', itemData);
            console.log("Item created successfully");

        } catch (error) {
            console.error('Error creating item:', error.response ? error.response.data.message : error.message);
        }

        navigate('/marketplace');
    }


    return (
        <div class="item-container">
            <h1 class="item-container__title">Post an item for sale on Marketplace!</h1>
            <form className="item-form" onSubmit={handleSubmit}>
                <input class="item-container__input"
                    type="text"
                    name="itemname"
                    placeholder="Name"
                    value={itemData.itemname}
                    onChange={handleNameChange}
                />
                <input class="item-container__input"
                    type="text"
                    name="itemprice"
                    placeholder="Price"
                    value={itemData.price}
                    onChange={handlePriceChange}
                />
                {/* <input class="item-container__input"
                    type="text"
                    name="itemcategory"
                    placeholder="Category"
                    value={itemData.category}
                    onChange={handleCategoryChange}
                /> */}
                <select class="dropDown" onChange={handleCategoryChange}>
                    <option value="">Select Category</option>
                    <option value="clothes">Clothes</option>
                    <option value="tools">Tools</option>
                    <option value="plants">Plants</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="organics">Organics</option>
                    <option value="others">Others</option>
                </select>
                <button class="item-container__button" type="submit">Post Item</button>
                {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
            </form>
        </div>
    );
}

export default CreateItem;