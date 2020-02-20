import React from 'react';
import './layout.scss';
import Header from '../Header/header';

const Layout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
        </div>
    ); 
}

export default Layout