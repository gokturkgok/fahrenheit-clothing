import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCard, addItem, removeItem } from '../../redux/card/card.actions';
import { CheckoutImageContainer, CheckoutItemContainer, QuantityContainer, RemoveButtonContainer, TextContainer } from './checkout-item.styles';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cardItem, clearItem, addItem, removeItem }) => {
  const {name, imageUrl, price, quantity}  = cardItem;
  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt="item" />
      </CheckoutImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cardItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cardItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>$ {price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cardItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
  };

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCard(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);