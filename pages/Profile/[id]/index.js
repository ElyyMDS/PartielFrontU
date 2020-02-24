import React, { Component, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout/layout';
import { connect } from 'react-redux';
import '../profile.scss'
import Button from '../../../components/Button/button';

const Profile = (props) => {

    const router = useRouter()
    const { id } = router.query
    const [userId,setUserId] = useState(id)

   
        
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

                            <div className="tab active">
                                <p className="tab_title">
                                    PORTFOLIO
                                </p>
                            </div>
                            <div className="tab">
                                <p className="tab_title">
                                    CV
                                </p>
                            </div>
                            <div className="tab">
                                <p className="tab_title">
                                    CONTACT
                                </p>
                            </div>

                        </div>
                        <div className="profile_post">

                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}




export default connect(state=>state)(Profile)