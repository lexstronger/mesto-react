import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onMouseDown={props.onOverlayClose}>
      <div className='popup__container'>
        <button className='popup__cross' type='button' aria-label='Закрыть попап' onClick={props.onClose}></button>
        <h3 className='popup__heading'>{props.title}</h3>
        <form className='popup__form' name={`${props.name}`} noValidate>
          {props.children}
          <button className='popup__button' type='submit'>{props.textButton}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;