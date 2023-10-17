// HomePage.js

import React from 'react';
import CareReminder from './CareReminder';
import WeatherBasedSuggestions from './WeatherBasedSuggestions';

function HomePage() {
    return (
        <div>
            <WeatherBasedSuggestions />
            <CareReminder />
        </div>
    );
}

export default HomePage;

