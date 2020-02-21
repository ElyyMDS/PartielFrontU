import React from 'react';
import './Card.scss';

const Card = (props) => {
    console.log(props.backgroundImg)
      return (
          <div className="card" style={{backgroundImage: props.backgroundImg}}>
              <div className="card_overlay">
                  <div className="details">
                    <img src="/assets/heart.svg"></img>
                    <span>4012</span>
                  </div>
                  <p>@Bodine</p>
              </div>
          </div>
      )
}

export default Card
