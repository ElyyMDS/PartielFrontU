import React from 'react';
import './Card.scss';

const Card = (props) => {

      return (
          <div className="card" style={{backgroundImage: props.backgroundImg,flexBasis: props.flexBasis ? props.flexBasis : false}}>
              <div className="card_overlay">
                  <div className="details">
                    <img src="/assets/heart.svg"></img>
                    <span>{props.like}</span>
                  </div>
                  <p>@{props.username}</p>
              </div>
          </div>
      );
}

export default Card
