import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import PrivateComponent from './PrivateComponent';

import LandingPage from './LandingPage';
import MainLayout from './MainLayout';
import HomePage from './HomePage';
import UserGarden from './UserGarden';
import PlantDirectory from './PlantDirectory';
import Journal from './Journal';
import Marketplace from './Marketplace';
import Login from './Login';
import SignUp from './SignUp';


function App() {
    return (
        <AuthProvider>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/landing" element={<LandingPage />} />
                        <Route path="/" element={<PrivateComponent />} >
                            <Route index element={<HomePage />} />
                            <Route path="/my-garden" element={<UserGarden />} />
                            <Route path="/directory" element={<PlantDirectory />} />
                            <Route path="/journal" element={<Journal />} />
                            <Route path="/marketplace" element={<Marketplace />} />
                        </Route>
                    </Routes>
                </MainLayout>
            </Router>
        </AuthProvider>
    );
}

export default App;


