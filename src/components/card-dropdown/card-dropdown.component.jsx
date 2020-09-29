import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CardItem from '../card-item/card-item.component';
import { selectCardItems } from "../../redux/card/card.selectors";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";


import './card-dropdown.styles.scss';

const CardDropdown = ({ cardItems, history }) => (
  <div className='card-dropdown'>
    <div className='card-items'>
      { 
        cardItems.length 
        ? ( cardItems.map(cardItem => (
              <CardItem key={cardItem.id} item={cardItem} />
            ))
          ) 
        :
        (
          <span className='empty-message'>Your card is empty</span>
        )
      }
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector ({
  cardItems: selectCardItems
});

export default withRouter(connect(mapStateToProps)(CardDropdown));