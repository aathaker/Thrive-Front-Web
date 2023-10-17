import React, { useState, useEffect } from 'react';

function UserGarden() {
    return (
        <div>
            {plants.length === 0 ? (
                <div>
                    <p>You don't have any plants yet.</p>
                    <button onClick={() => {/* Add functionality to add a plant here */}}>Add Plants to Your Garden</button>
                </div>
            ) : (
                plants.map(plant => (
                    <div key={plant.id}>
                        {/* Render your plant data here */}
                        <p>{plant.name}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default UserGarden;

