import React from 'react';
import './layout.scss';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Head from 'next/head';

const Layout = (props) => {
    return(
        <div>
            <Head>
                <script src="https://kit.fontawesome.com/0999ec302d.js" crossorigin="anonymous"></script>
            </Head>
            <Header />
            {props.children}
            <Footer />
        </div>
    ); 
}

export default Layout