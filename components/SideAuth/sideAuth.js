import React from 'react';
import Link from 'next/link';
import './sideAuth.scss'

const SideAuth = (props) => {
    return(
        <div className="side_auth">
            <div className="login">
                <Link href="/login">
                    <a style={{color: 'black'}}>
                        <p className={props.current === 'login' ? "text_horizontal active" : "text_horizontal"}>DÉJA INSCRIT ?</p>
                    </a>
                </Link>
            </div>
            <div className="register">
                <Link href="/register">
                    <a style={{color: 'black'}}>
                        <p className={props.current === 'register' ? "text_horizontal active" : "text_horizontal"}>CREER UN COMPTE ?</p>
                    </a>
                </Link>
            </div>
        </div>                            
    )
}

export default SideAuth