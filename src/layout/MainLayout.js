import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
const MainLayout = (props) => {

    return (
        <div className = "body">
            <Header />
            <div minHeight="calc(100vh - 64px)" display="flex" flexDirection="column">
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
