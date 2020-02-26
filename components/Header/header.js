import React, { useState } from 'react';
import Button from '../Button/button';
import Link from 'next/link';
import './header.scss';
import {connect} from 'react-redux'


const Header = (props) => {
    const [hidden,setHidden] = useState(true);
    return(
        <header id="top" className="block_header">
            <div className="wrapper">
                <Link href="#"><a><img className="logo_U" src="/assets/U_blanc-8.png"></img></a></Link>
                <nav>
                    <ul className="nav_header">
                        <li>
                            <Link href="/"><a>Accueil</a></Link>      
                        </li>    
                        <li>
                            <Link href="/tips"><a>Tips</a></Link>
                        </li>
                        <li>
                            <Link href="/emploi"><a >Offres d'emplois</a></Link>
                        </li>
                        <li>
                            <Link href="/support-us"><a>Adopter une abeille</a></Link>
                        </li>
                    </ul>
                </nav>
                {props.user.username ? 
                <div className="user_block" onClick={() => hidden? setHidden(false) : setHidden(true)}>
                    <Link href={`/profile/${props.user._id}`}><a><img src="/assets/IMG_2707.png" className="user_img" /></a></Link>
                    <p className="username">{props.user.username}</p>
                    
                </div>
                : <div className="auth_section">
                    <Button color="white" text="Connexion" href="/login"/>
                    <Button backgroundColor="white" color="#FFC30B" text="Inscription" href="/register" />
                </div> }   
                {props.user.username?
                <div className="user_menu" style={{opacity: hidden?'0':'100%'}}> 
                    <ul className="user_menu_list">
                        <li className="user_menu_list_item"><Link href="/profile/mon-compte"><a>Mon Compte</a></Link></li>
                        <li className="user_menu_list_item"><Link href="#"><a>Mon tips</a></Link></li>
                        <li className="user_menu_list_item"><Link href="#"><a>Notifications</a></Link></li>
                        <li className="user_menu_list_item"><Link href="#"><a>Messages</a></Link></li>
                    </ul>
                </div>
                :false}       
            </div>
        </header>
    ); 
}

Header.getInitialProps = ({store, isServer, pathname, query}) => {
}

export default connect(state => state)(Header);