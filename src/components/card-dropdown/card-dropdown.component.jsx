import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CardItem from '../card-item/card-item.component';

import './card-dropdown.styles.scss';

const CardDropdown = ({ cardItems }) => (
  <div className='card-dropdown'>
    <div className='card-items'>
      { cardItems 
        ?  cardItems.map(cardItem => (<CardItem key={cardItem.id} item={cardItem} />))
        : "Loading..."
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ card: { cardItems } }) => ({
  cardItems
});

export default connect(mapStateToProps)(CardDropdown);