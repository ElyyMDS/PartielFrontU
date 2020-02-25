import React, {useState} from 'react';
import { connect } from 'react-redux';
import Layout from '../../../components/Layout/layout';
import './mon-compte.scss';

const MonCompte = props => {

    const [type,setType] = useState('profile');



    return(
        <Layout>
            <main className="block_mon-compte">
                <h2 className="title">Mon compte</h2>
                <div className="wrapper">
                    <div className="block_left">
                        <section className="user_info">
                            <img src="/assets/IMG_2707.png" className="user_img"/>
                            <div className="wrapper" >
                                <p className="user_name">Axelle Perchaud</p>
                                <p>Particulier</p>
                                <p>Forfait premium 1</p>
                            </div>
                        </section>
                        <section className={type === 'parametre' ? "user_section active ": "user_section"} onClick={() => setType('parametre')}>
                            <p className="section_title">Paramètres</p>
                        </section>
                        <section className={type === 'forfait' ? "user_section active ": "user_section"} onClick={() => setType('forfait')}>
                            <p className="section_title">Mon Forfait</p>
                        </section>
                        <section className={type === 'stat' ? "user_section active ": "user_section"} onClick={() => setType('stat')}>
                            <p className="section_title">Mes statistiques</p>
                        </section>
                        <section className={type === 'annonce' ? "user_section active ": "user_section"} onClick={() => setType('annonce')}>
                            <p className="section_title">Mes annonces</p>
                        </section>
                        <section className="user_section">
                            <p className="section_title">Déconnexion</p>
                        </section>
                    </div>
                    <div className="block_right">

                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default connect(state=>state)(MonCompte);