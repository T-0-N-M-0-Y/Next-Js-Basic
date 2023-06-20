import React from 'react';
import Navbar from '../components/Navbar';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer><p>Footer Here</p></footer>
        </div>
    );
};

export default WithLayout;