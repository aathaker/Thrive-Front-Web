import React from 'react';
import './About.css';

function About() {
    return (
        <div className="aboutContainer">
            <h1>About Plant Care</h1>
            <section className="aboutSection">
                <h2>Sunlight Requirements</h2>
                <p>
                    Sunlight is vital for plant growth. Different plants have varied sunlight requirements, 
                    ranging from full sunlight to partial shade. It's essential to research the sunlight needs
                    of your specific plant and provide the optimal amount for its growth and health.
                </p>
            </section>

            <section className="aboutSection">
                <h2>Watering Requirements</h2>
                <p>
                    Watering is a crucial aspect of plant care. Overwatering or underwatering can harm 
                    or even kill plants. It's important to understand the watering needs of your specific plant. 
                    Some plants prefer the soil to dry out between watering, while others might need consistently moist soil.
                </p>
            </section>
        </div>
    );
}

export default About;

