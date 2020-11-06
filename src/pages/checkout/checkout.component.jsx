import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { selectCardItems, selectCardTotal } from '../../redux/card/card.selectors';
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TotalContainer, TestWarningContainer } from './checkout.styles';

import './checkout.styles.scss';

const CheckoutPage = ({ cardItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cardItems.map(cardItem => (
      <CheckoutItem key={cardItem.id} cardItem={cardItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>

);

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
  total: selectCardTotal
});

export default connect(mapStateToProps)(CheckoutPage);