import React, { Component, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import Layout from '../../../components/Layout/layout';
import Button from '../../../components/Button/button';
import Card from '../../../components/Card/Card';
import Link from 'next/link';
import '../profile.scss'

const Profile = (props) => {

    const router = useRouter();
    const { id } = router.query;
    const [userId,setUserId] = useState(id);
    const [type,setType] = useState('contact');

    const [posts,setPosts] = useState([
        {backgroundImg: "url('/assets/1.png')",like: 3025,username:'Axelle'},
        {backgroundImg: "url('/assets/2.jpg')",like: 56,username:'Axelle'},
        {backgroundImg: "url('/assets/3.jpg')",like: 325,username:'Axelle'},
        {backgroundImg: "url('/assets/4.jpg')",like: 4521,username:'Axelle'},
        {backgroundImg: "url('/assets/5.jpg')",like: 8976,username:'Axelle'},
        {backgroundImg: "url('/assets/3.jpg')",like: 45,username:'Axelle'},
        {backgroundImg: "url('/assets/2.jpg')",like: 324,username:'Axelle'},
        {backgroundImg: "url('/assets/1.png')",like: 3245,username:'Axelle'},
    ]);
        
    return(
        <Layout>
            <main className="block_profile">

                <div className="profile_header">
                    <div className="wrapper">

                        <div className="profile_info">
                            <img src="/assets/IMG_2707.png" />
                            <h2 className="profile_name">Axelle Perchaud</h2>
                            <p className="profile_username">@axelle</p>
                            <p className="profile_age-salarie">19 ans</p>
                        </div>

                        <div className="profile_description">
                            <p className="profile_title">Biographie</p>
                            <p className="profile_text">
                                Actuellement en Bachelor 2ème année à MyDigitalSchool Angers, j’étudie tous les domaines du digital, du développement au WebMarketing en passant par le WebDesign.
                                Je suis plus particulièrement intéressée par le domaine du design, de la communication, des réseaux sociaux et du monde de l’entrepreneuriat.
                            </p>
                            <p className="profile_city">Angers, France</p>
                            <div className="wrapper_button">
                                <Button href="#" text="Envoyer un message" color="white" backgroundColor="#FFC30B" borderColor="#FFC30B" flexBasis="45%"/>
                                <Button href="#" text="S'abonner" color="#FFC30B" backgroundColor="none" borderColor="#FFC30B" flexBasis="45%"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile_content">
                    <div className="wrapper">
                        <div className="profile_tab">

                            <div className={type === 'portfolio' ? "tab active" : "tab"}>
                                <p className="tab_title" onClick={() => setType('portfolio')}>
                                    PORTFOLIO
                                </p>
                            </div>
                            <div className={type === 'cv' ? "tab active" : "tab"}>
                                <p className="tab_title" onClick={() => setType('cv')}>
                                    CV
                                </p>
                            </div>
                            <div className={type === 'contact' ? "tab active" : "tab"}>
                                <p className="tab_title" onClick={() => setType('contact')}>
                                    CONTACT
                                </p>
                            </div>

                        </div>
                        {type === 'portfolio' ?
                        <div className="profile_post">
                        {posts.map((post,index) => {
                            return <Card key={index} like={post.like} backgroundImg={post.backgroundImg} username={post.username} flexBasis="30%"/>
                        })}
                        </div> : type === 'cv' ? 
                        <div className="profile_cv">

                        </div> : type === 'contact' ? 
                        <div className="profile_contact">
                            <p className="user_info_contact">axelle.perchaud[@]gmail.com</p>
                            <p className="ou">Ou</p>
                            <p className="user_info_contact">Messagerie privée</p>
                            <p className="ou">Ou</p>
                            <ul className="profile_social">
                                <li className="profile_social_item"><Link href="#" ><a><img src="/assets/twitter.svg" /></a></Link></li>
                                <li className="profile_social_item"><Link href="#" ><a><img src="/assets/instagram.svg" /></a></Link></li>
                                <li className="profile_social_item"><Link href="#" ><a><img src="/assets/facebook.svg" /></a></Link></li>
                            </ul>
                        </div> : false}
                    </div>
                </div>
            </main>
        </Layout>
    );
}




export default connect(state=>state)(Profile)