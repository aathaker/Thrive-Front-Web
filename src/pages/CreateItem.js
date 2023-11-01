import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateItem.css';

function CreateItem() {
    const navigate = useNavigate();
    const [itemData, setItemData] = useState({
        itemname: '',
        price: '',
        category: ''
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

        const { itemname, price, category } = itemData;
        // Use the form values as needed
        console.log(`Name: ${itemname}, Price: ${price}, Category: ${category}`);
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
                <input class="item-container__input"
                    type="text"
                    name="itemcategory"
                    placeholder="Category"
                    value={itemData.category}
                    onChange={handleCategoryChange}
                />
                <button class="item-container__button" type="submit">Post Item</button>
                {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
            </form>
        </div>
    );
}

export default CreateItem;