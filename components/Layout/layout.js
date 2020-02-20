import React from 'react';
import './layout.scss';
import Header from '../Header/header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    ); 
}

export default Layout