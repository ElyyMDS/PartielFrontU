import React from 'react';
import './footer.scss';
import Link from 'next/link';

const Footer = () => {
    return(
        <footer className="block_footer">
            <div className="footer_wrapper">
                <ul className="footer_menu">
                    <li className="footer_item">
                        <Link href="/conditions">
                            <a className="footer_link">
                                <p className="fotoer_texte">Plan du site</p>
                            </a>
                        </Link>
                    </li>
                    <li className="footer_item">
                        <Link href="/conditions">
                            <a className="footer_link">
                                <p className="fotoer_texte">Conditions d'utilisation</p>
                            </a>
                        </Link>
                    </li>
                    <li className="footer_item">
                        <Link href="/conditions">
                            <a className="footer_link">
                                <p className="fotoer_texte">Confidentialité</p>
                            </a>
                        </Link>
                    </li>
                    <li className="footer_item">
                        <Link href="/conditions">
                            <a className="footer_link">
                                <p className="fotoer_texte">FAQ</p>
                            </a>
                        </Link>
                    </li>
                    <li className="footer_item">
                        <Link href="/conditions">
                            <a className="footer_link">
                                <p className="fotoer_texte">Aide</p>
                            </a>
                        </Link>
                    </li>
                </ul>
                <div className="footer_social">
                    <ul className="footer_social_menu">
                        <li className="footer_social_item"><Link href="#" ><a><img src="/assets/twitter.svg" /></a></Link></li>
                        <li className="footer_social_item"><Link href="#" ><a><img src="/assets/instagram.svg" /></a></Link></li>
                        <li className="footer_social_item"><Link href="#" ><a><img src="/assets/facebook.svg" /></a></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;