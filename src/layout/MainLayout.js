import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
const MainLayout = (props) => {

    return (
        <div className = "body">
            <Header />
            <div minheight="calc(100vh - 64px)" display="flex" flexdirection="column">
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
