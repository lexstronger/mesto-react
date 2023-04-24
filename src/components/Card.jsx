import React from "react";
import trash from "../images/trash.svg";

function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card);
  };

  return (
    <li className='card__item'>
    <img className='card__image' src={card.link} alt={card.name} onClick={handleCardClick}/>
    <button className='card__trash' src={trash} type='button' aria-label='Удалить карточку'></button>
    <div className='card__panel'>
      <h2 className='card__name'>{card.name}</h2>
      <div className="card__stats">
        <button className="card__like" type="button" aria-label="Поставить лайк"></button>
        <span className="card__quantity-likes">{card.likes.length}</span>
      </div>
    </div>
  </li>
  )
}

export default Card;