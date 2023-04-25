import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import React from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  };
  function closeAllPopupsByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }
  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onOverlayClose={closeAllPopupsByOverlay} textButton={'Сохранить'}>
          <input className='popup__input popup__input_type_name' id='input-username' type='text' name='name' placeholder='Имя' required minLength='2' maxLength='40'/>
          <span className='popup__input-error unput-username-error'/>
          <input className='popup__input popup__input_type_description' id='input-description' type='text' name='description' placeholder='О себе' required minLength='2' maxLength='200'/>
          <span className='popup__input-error unput-description-error'/>
        </PopupWithForm>
        <PopupWithForm name={'new-card'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onOverlayClose={closeAllPopupsByOverlay} textButton={'Создать'}>
          <input className='popup__input popup__input_type_title' id='input-cardtitle' type='text' name='title' placeholder='Название' required minLength='2' maxLength='30'/>
          <span className='popup__input-error unput-cardtitle-error'/>
          <input className='popup__input popup__input_type_link' id='input-link' type='url' name='link' placeholder='Ссылка на картинку' required/>
          <span className='popup__input-error unput-link-error'/>
        </PopupWithForm>
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onOverlayClose={closeAllPopupsByOverlay} textButton={'Сохранить'}>
          <input className='popup__input popup__input_type_avatar' id='input-avatar' type='url' name='avatar' placeholder='Ссылка на аватар' required/>
          <span className='popup__input-error input-avatar-error'></span>
        </PopupWithForm>
        <PopupWithForm name={'confirm'} title={'Вы уверены?'} textButton={'Да'}/>
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} onOverlayClose={closeAllPopupsByOverlay}/>
      </div>
    </div>
  );
}

export default App;