import React from "react";
import Card from "./Card.jsx";
import api from "../utils/Api.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getCurrentUser()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button
            className="profile__avatar-btn"
            type="button"
            aria-label="Обновить аватар"
            onClick={props.onEditAvatar}
          >
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Аватар пользователя"
            />
          </button>
          <div className="profile__change-name">
            <div className="profile__text">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__description">{userDescription}</p>
            </div>
            <button
              className="profile__button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
