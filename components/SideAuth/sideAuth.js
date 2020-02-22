import React from 'react';
import Link from 'next/link';
import './sideAuth.scss'

const SideAuth = (props) => {
    return(
        <div className="side_auth">
            <div 
                className={props.current === 'login' ? "login active" : "login"}
                style={{borderRight: props.current !== 'login' ? '1px solid black' : 'none'}}
            >
                <Link href="/login">
                    <a style={{color: props.current === 'login' ? '#FFC30B' : 'black'}}>
                        <p className="text_horizontal">DÉJA INSCRIT ?</p>
                    </a>
                </Link>
            </div>
            <div
                className={props.current === 'register' ? "register active" : "register"}
                style={{borderRight: props.current !== 'register' ? '1px solid black' : 'none'}}
            >
                <Link href="/register">
                    <a style={{color: props.current === 'register' ? '#FFC30B' : 'black'}}>
                        <p className="text_horizontal">CREER UN COMPTE ?</p>
                    </a>
                </Link>
            </div>
        </div>                            
    )
}

export default SideAuth