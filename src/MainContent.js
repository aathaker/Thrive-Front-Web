import React from 'react';
import Header from './Header';
import PlantDirectory from './PlantDirectory';
// ... import other components

function App() {
  return (
    <div className="App">
      <Header />
      <PlantDirectory />
      {/* <OtherComponents /> */}
      {/* Depending on your routing or state, you'd conditionally render components here */}
    </div>
  );
}

export default App;

