import React from 'react';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';
import { useAuth } from '../context/AuthContext';
import './MainLayout.css';

function MainLayout({ children }) {
    const { isLoggedIn } = useAuth();

    return (
        <>
            <div className="container">
                {isLoggedIn && <Header />}
      

                <main className="main-content">
                    {children}  {/* This will be the main content of the page */}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;

