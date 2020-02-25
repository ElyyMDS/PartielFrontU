import React from "react";
import {connect} from "react-redux";
import Layout from '../../components/Layout/layout';
import * as action from '../../redux/actions/user_actions';
import "./emploi.scss";
import CardEmploi from "../../components/CardEmploi/cardEmploi";

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