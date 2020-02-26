import React, {useState} from 'react';
import './tips.scss';
import {connect} from "react-redux";
import Layout from '../../components/Layout/layout';
import Button from '../../components/Button/button';
import { activeElement } from 'dom-helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

const Tips = props => {

    const [activeElement,setActiveElement] = useState(1);

    return(
        <Layout>
            <div className="block_tips">
                <div className="wrapper">
                    <h2>Toutes les semaines découvrez un nouveau <span>conseil</span><br></br>pour vous aider dans vos démarches !</h2>
                    <div className="text">
                        <p>
                        Vous êtes en difficulté face à la recherche
                        <br></br>- d’emploi
                        <br></br>- de stage
                        <br></br>- d’alternance   
                        </p>
                    </div>
                    <div className="bg_computer">
                        <img src="/assets/ordinateur.png"></img>
                    </div>
                </div>
            </div>
            <div className="block_question">
                <div className="grosse_div">
                    <div className="block_wrapper">
                        <div className={activeElement === 1 ? "question active" : "question"} onClick={() =>  activeElement==1 ? setActiveElement(0) : setActiveElement(1)} >
                            <h2>1</h2>
                            <h3>Comment rédiger son CV ?</h3>
                        </div>
                        <div className={activeElement === 2 ? "question active" : "question"} onClick={() => activeElement==2 ? setActiveElement(0) : setActiveElement(2)} >
                            <h2>2</h2>
                            <h3>Comment rédiger son CV ?</h3>
                        </div>
                        <div className={activeElement === 3 ? "question active" : "question"} onClick={() =>  activeElement==3 ? setActiveElement(0) : setActiveElement(3)} >
                            <h2>3</h2>
                            <h3>Comment rédiger son CV ?</h3>
                        </div>
                        <div className={activeElement === 4 ? "question active" : "question"} onClick={() =>  activeElement==4 ? setActiveElement(0) : setActiveElement(4)} >
                            <h2>4</h2>
                            <h3>Comment rédiger son CV ?</h3>
                        </div>
                    </div>
                    <div className="block_answer" style={{flexBasis: activeElement === 0 ? "0%" : "65%"}}>
                        <div className="inner">
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi condimentumumsan finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi condimentumumsan finibus augue dignissim. Deld Nullam tincidunt.
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <Button href="/tips_details" color="#FFC30B" text="Voir l'article" />
                        </div>
                        <div className="block_img" style={{order: activeElement>2 ? -1 : 2}}>
                            <img src="/assets/1.png" className="answer_img" />
                        </div>
                    </div>
                </div>         
            </div>
            <div className="block_vide"></div>
            <div className="block_content">
                <div className="block_menu">                
                    <div class="input-icons"> 
                        <i class="fa fa-search icon"></i> 
                        <input class="input-field" type="text" placeholder="Rechercher" />
                    </div> 
                    <div className="category">
                        <h3>Catégories</h3>
                        <h3 className="sub_category">Entretiens</h3>
                        <h3 className="sub_category">CV</h3>
                        <h3 className="sub_category">Lettre de motivation</h3>
                        <h3 className="sub_category">Recherches</h3>
                    </div>
                </div>
                <div className="block_text">
                    <h2>Retrouvez tous les <span>Tips</span> !</h2>
                    <h4>Quels sont les forfaits premium ?</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi 
                    finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adip
                    tincidunt.Lorem ipsum dolor sit amet, consectetur adip.
                    </p>
                    <h4>J’ai un problème avec la connexion à mon compte</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi 
                    finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adip
                    tincidunt.Lorem ipsum dolor sit amet, consectetur adip.
                    </p>
                    <h4>Comment désactiver son forfait premium ?</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi 
                    finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adip
                    tincidunt.Lorem ipsum dolor sit amet, consectetur adip.
                    </p>
                    <h4>J’ai un problème avec la connexion à mon compte</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi 
                    finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adip
                    tincidunt.Lorem ipsum dolor sit amet, consectetur adip.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi 
                    finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adip
                    tincidunt.Lorem ipsum dolor sit amet, consectetur adip.
                    </p>
                    <h4>J’ai un problème avec la connexion à mon compte</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi 
                    finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adip
                    tincidunt.Lorem ipsum dolor sit amet, consectetur adip.
                    </p>
                </div>
            </div>
            <div className="block_faq">
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
            </div>
            
        </Layout>
    )
}

Tips.getInitialProps = ({store, isServer, pathname, query}) => {

    return {isServer}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Tips);