import React from "react";
import {connect} from "react-redux";
import Layout from '../../components/Layout/layout';
import * as action from '../../redux/actions/user_actions';
import "./index.scss";
import Card from "../../components/Card/Card";
import Link from 'next/link';
import Swiper from "swiper";
import Head from 'next/head';
import Button from '../../components/Button/button';



const Index = props => {

    
    const data = [
        {backgroundImg: `url('/assets/1.png')`, like: 5102,username: "Bodine"},
        {backgroundImg: `url('/assets/2.jpg')`, like: 4100,username: "Alexandre"},
        {backgroundImg: `url('/assets/3.jpg')`, like: 3410,username: "Axelle"},
        {backgroundImg: `url('/assets/4.jpg')`, like: 3110,username: "Ely"},
        {backgroundImg: `url('/assets/5.jpg')`, like: 2410,username: "Théo"},
        {backgroundImg: `url('/assets/6.jpg')`, like: 1410,username: "Yann"}
    ]
    return(
        <Layout >
            <Head><link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
                  <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
                  <script src="https://unpkg.com/swiper/js/swiper.js"></script>
                  <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
            </Head>
            <main className="block_accueil">
                <div  className="block_top">
                    <h2>Vous êtes...</h2>
                    <div className="wrapper">
                        <div className="block_particulier">
                            <a href="#"><p>UN PARTICULIER</p>
                            <span>En savoir +</span></a>
                        </div>
                        <div className="block_entreprise">
                            <a href="#"><p>UNE ENTREPRISE</p>
                            <span>En savoir +</span></a>
                        </div>
                    </div>
                </div>
                <div className="block_publication">
                    <h2>Les publications préférées des utilisateurs</h2>
                    <div className="wrapper">
                        {data.map((post, index) => {
                            return <Card key={index} backgroundImg={post.backgroundImg} like={post.like} username={post.username} flexBasis="30%"/>
                        })}
                    </div>
                </div>
                <div className="block_conseil">
                    <div className="wrapper">
                        <p className="title">Toutes les semaines découvrez un nouveau <span>conseil</span><br></br> pour vous aider dans vos démarches ! </p>
                        <p className="sub_title">Si vous avez des suggestions de tips n’hésitez pas à nous contacter</p>
                        <p>#emploi #stage #alternance #U.</p>
                    </div>
                    <div className="footer_social">
                        <ul className="footer_social_menu">
                            <li className="footer_social_item"><Link href="#" ><a><img src="assets/twitter.svg" /></a></Link></li>
                            <li className="footer_social_item"><Link href="#" ><a><img src="assets/instagram.svg" /></a></Link></li>
                            <li className="footer_social_item"><Link href="#" ><a><img src="assets/facebook.svg" /></a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="block_line_1">
                    <div className="line small"></div>
                    <div className="line medium"></div>
                </div>
                <div className="block_content">
                    <div className="block_left">
                        
                    </div>
                            
                    <div className="block_tips yellow">
                        <div className="wrapper">
                            <h2>Ce mois-ci retrouver nos tips <br></br>pour vos <span>entretiens </span>!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget metus eget ligula bibendum vehicula. Donec magna lacus, consectetur quis orci sed, tristique scelerisque nisl. Cras sed pulvinar risus. Sed.</p>
                            <p className="tip"><a href="">Voir tous les tips</a></p>
                        </div>
                    </div>

                    <div className="block_newsletter yellow">
                        <h2>Pour ne rien rater<br></br>Inscrivez-vous à notre <span>newsletter</span> !</h2>
                        <form className="form_mail_newsletter">
                            <input placeholder="Mail"></input>
                            <Button color="white" text="Envoyer" href="#"/>
                        </form>
                    </div>

                    <div className="block_right">
                         
                    </div>

                    <div className="block_faq_left">
                        <p>Quels sont les forfaits premium ?</p>
                        <p>J’ai un problème avec la connexion à mon compte</p>
                        <p>Comment désactiver son forfait premium ?</p>
                        <p className="border">Optimiser son CV pour qu’il vous ressemble </p>
                    </div>

                    <div className="block_faq_right">
                        <div className="wrapper">
                            <h2>Vous avez besoin d'aide ? Découvrez notre <span>foire aux questions </span>!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget metus eget ligula bibendum vehicula. Donec magna lacus, consectetur quis orci sed, tristique scelerisque nisl. Cras sed pulvinar risus. Sed.</p>
                        </div>
                    </div>

                    <div className="block_inscription">
                        <div className="wrapper">
                            <p className="title">Réaliser. Partager. Trouver.<br></br>Inscivez-vous dès maintenant sur <span>U.</span></p>
                            <Button padding="10px" width="10%" backgroundColor="#FFC308" color="white" text="S'inscrire" href="#"/>
                            <p className="sub_title">Le réseau professionnel qui s'adapte à vous.</p>
                            <p className="sub_title_2">#emploi #stage #alternance #U.</p>
                        </div>
                    </div>
                    <div className="wrapper_line_chevron">
                        <div className="block_line_2">
                            <div className="line small"></div>
                            <div className="line medium"></div>
                        </div>
                        <div>
                            <li className="footer_social_item"><Link href="#top" ><a><img src="assets/down-chevron.png" /></a></Link></li>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="block_footer">
                        <ul className="liste">
                            <li>Plan du site</li>
                            <li>Conditions d'utilisations</li>
                            <li>Confidentialités</li>
                            <li>FAQ</li>
                            <li>Aide</li>
                        </ul>
                        <div className="icon">
                            <img src="/assets/facebook.svg"></img>
                            <img src="/assets/twitter.svg"></img>
                            <img src="/assets/instagram.svg"></img>
                        </div>
                    </div>
                </footer>
            </main>
        </Layout>
    );
}

Index.getInitialProps = ({store, isServer, pathname, query}) => {

    return {isServer}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Index);