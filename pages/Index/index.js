import React from "react";
import {connect} from "react-redux";
import Layout from '../../components/Layout/layout';
import * as action from '../../redux/actions/user_actions';
import "./index.scss";
import Card from "../../components/Card/Card";
import Link from 'next/link';
import Swiper from "swiper";
import Head from 'next/head';


const Index = props => {

    if (props.isServer) {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
         });
    }
    const data = [
        {backgroundImg: `url('/assets/1.png')`, like: 410},
        {backgroundImg: `url('/assets/2.jpg')`, like: 410},
        {backgroundImg: `url('/assets/3.jpg')`, like: 410},
        
    ]
    return(
        <Layout >
            <Head><link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
                  <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
                  <script src="https://unpkg.com/swiper/js/swiper.js"></script>
                  <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
            </Head>
            <main className="block_accueil">
                <div className="block_top">
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
                            return <Card key={index} backgroundImg={post.backgroundImg}/>
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
                <div className="block_line">
                    <div className="line small"></div>
                    <div className="line medium"></div>
                </div>
                <div className="block_content">
                    <div className="block_left">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                            <div class="swiper-slide">Slide 1</div>
                            <div class="swiper-slide">Slide 2</div>
                            <div class="swiper-slide">Slide 3</div>
                            <div class="swiper-slide">Slide 4</div>
                            <div class="swiper-slide">Slide 5</div>
                            <div class="swiper-slide">Slide 6</div>
                            <div class="swiper-slide">Slide 7</div>
                            <div class="swiper-slide">Slide 8</div>
                            <div class="swiper-slide">Slide 9</div>
                            <div class="swiper-slide">Slide 10</div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                            
                    <div className="block_right">
                        <p>lorem</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

Index.getInitialProps = ({store, isServer, pathname, query}) => {

    return {isServer}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Index);