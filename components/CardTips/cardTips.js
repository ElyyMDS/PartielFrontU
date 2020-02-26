import React, { useState } from 'react';
import './cardTips.scss';
import Button from '../Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const CardTips = props => {

      const [like, setLike] = useState(false);

      return (
          <div className="card_emploi">
              <div className="clip">
                {like ? <img onClick={() => setLike(false)} src="/assets/clip.png"></img> : <img onClick={() => setLike(true)} src="/assets/clip_vide.png"></img>}
              </div>
              <div>
                  <img className="img" src={props.img}></img>
              </div>
              <div className="title">
                <h3>{props.title}</h3>
              </div>
              <div className="content">
                <p className="type">{props.type}</p>
                <p className="text">{props.content}</p>
              </div>
              <div className="details">
                <FontAwesomeIcon className="fa" icon={faThumbsUp}/>
                <FontAwesomeIcon className="fa" icon={faThumbsDown}/>
              </div>
              <Button className="button" href="#" text="Lire plus" color="#FFC30B" width="20%" margin="2rem auto" border="3px solid #FFC30B"/>
          </div>
      )
}

export default CardTips
