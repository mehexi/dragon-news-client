import React from 'react';
import Nav from '../pages/sheard/nav';
import MainPost from '../pages/main/main';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            
        </>
    );
};

export default Main;