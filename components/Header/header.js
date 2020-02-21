import React from 'react';
import Button from '../Button/button';
import Link from 'next/link';
import './header.scss';
import {connect} from 'react-redux'


const Header = (props) => {
    return(
        <header className="block_header">
            <div className="wrapper">
                <Link href="#"><a><img className="logo_U" src="/assets/U_blanc-8.png"></img></a></Link>
                <nav>
                    <ul className="nav_header">
                        <li>
                            <Link href="#"><a>Accueil</a></Link>      
                        </li>    
                        <li>
                            <Link href="#"><a>Tips</a></Link>
                        </li>
                        <li>
                            <Link href="#"><a >Offres d'emplois</a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>Adopter une abeille</a></Link>
                        </li>
                    </ul>
                </nav>
                <div className="block_auth">
                    <Button color="white" text="Connexion" />
                    <Button backgroundColor="white" color="#FFC30B" text="Inscription" />
                </div>
            </div>
        </header>
    ); 
}

Header.getInitialProps = ({store, isServer, pathname, query}) => {
}

export default connect(state => state)(Header);