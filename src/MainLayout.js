import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './MainLayout.css';

function MainLayout({ children }) {
    return (
        <div className="container">
            <Header />
            
            <main className="main-content">
                {children}  {/* This will be the main content of the page */}
            </main>
            
            <Footer />
        </div>
    );
}

export default MainLayout;

