import React from 'react';
import './cardEmploi.scss';
import Button from '../Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';


const CardEmploi = props => {
      return (
          <div className="card_emploi">
              <div className="img">
                  <img src={props.img}></img>
              </div>
              <div className="title">
                <h3>{props.title}</h3>
              </div>
              <div className="content">
                <p className="type">{props.type}</p>
                <p className="text">{props.content}</p>
              </div>
              <div className="details">
                <div className="salaire">
                <FontAwesomeIcon className="fa" icon={faMoneyCheckAlt}/>
                  <p>{props.salaire}</p>
                </div>
                <div className="localisation">
                  <FontAwesomeIcon className="fa" size="12px" icon={faMapMarkerAlt}/>
                  <p>{props.localisation}</p>
                </div>
              </div>
              <Button className="button" href="#" text="Lire plus" color="#FFC30B" width="20%" margin="2rem auto"/>
          </div>
      )
}

export default CardEmploi
