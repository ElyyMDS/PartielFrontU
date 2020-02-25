import React from "react";
import {connect} from "react-redux";
import Layout from '../../components/Layout/layout';
import * as action from '../../redux/actions/user_actions';
import "./emploi.scss";
import CardEmploi from "../../components/CardEmploi/cardEmploi";
import Button from "../../components/Button/button";

const Emploi = props => {
    const cardEmploi = [
        {img: `assets/logo.png`, title: "Coiffeur / visagiste", type: "CDI", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate pretium erat, ac pharetra nisl viverra non. Pellentesque mollis augue ut condimentum feugiat. Mauris vel augue eu risus vulputate tempor. ", salaire: "1138€/mois", localisation: "Angers"},
        {img: `assets/logo.png`, title: "Coiffeur / visagiste", type: "CDI", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate pretium erat, ac pharetra nisl viverra non. Pellentesque mollis augue ut condimentum feugiat. Mauris vel augue eu risus vulputate tempor. ", salaire: "1138€/mois", localisation: "Angers"},
        {img: `assets/logo.png`, title: "Coiffeur / visagiste", type: "CDI", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate pretium erat, ac pharetra nisl viverra non. Pellentesque mollis augue ut condimentum feugiat. Mauris vel augue eu risus vulputate tempor. ", salaire: "1138€/mois", localisation: "Angers"},
        {img: `assets/logo.png`, title: "Coiffeur / visagiste", type: "CDI", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate pretium erat, ac pharetra nisl viverra non. Pellentesque mollis augue ut condimentum feugiat. Mauris vel augue eu risus vulputate tempor. ", salaire: "1138€/mois", localisation: "Angers"},
        {img: `assets/logo.png`, title: "Coiffeur / visagiste", type: "CDI", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate pretium erat, ac pharetra nisl viverra non. Pellentesque mollis augue ut condimentum feugiat. Mauris vel augue eu risus vulputate tempor. ", salaire: "1138€/mois", localisation: "Angers"},
        {img: `assets/logo.png`, title: "Coiffeur / visagiste", type: "CDI", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate pretium erat, ac pharetra nisl viverra non. Pellentesque mollis augue ut condimentum feugiat. Mauris vel augue eu risus vulputate tempor. ", salaire: "1138€/mois", localisation: "Angers"}
    ]
    return(
        <Layout>
            <main className="block_emploi">
                <h2>Offres d'emplois</h2>
                <form className="form_search">
                    <div class="input-icons"> 
                        <i class="fa fa-search icon"></i> 
                        <input class="input-field" type="text" placeholder="Poste" />
                    </div> 
                    <div class="input-icons"> 
                        <i class="fa fa-map-marker icon"></i> 
                        <input class="input-field" type="text" placeholder="Localisation" />
                    </div> 
                    <div className="button">
                        <Button href="#" text="Rechercher" textAlign="center" color="#FFC30B" border="2px solid #FFC30B"/>
                    </div>
                </form>
                <div className="wrapper">
                {cardEmploi.map((card, index) => {
                            return <CardEmploi key={index} img={card.img} title={card.title} type={card.type} content={card.content} salaire={card.salaire} localisation={card.localisation}/>
                        })}
                </div>
            </main>
        </Layout>
    );
}

Emploi.getInitialProps = ({store, isServer, pathname, query}) => {

    return {isServer}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Emploi);