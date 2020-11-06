import React from 'react';
import { connect } from 'react-redux';

import CardItem from '../card-item/card-item.component';
import { selectCardItems } from "../../redux/card/card.selectors";
import { toggleCardHidden } from "../../redux/card/card.actions";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";


import './card-dropdown.styles.scss';
import { CardDropdownButton, CardDropdownContainer, CardItemsContainer, EmptyMessageContainer } from './card-dropdown.styles';

// using history withRouter can convey the current prop into the component.
// using dispatch as a prop
//  -> instead of writing additional unnecessary dispatchToProps, add dispatch(toggleCardHidden())
const CardDropdown = ({ cardItems, history, dispatch }) => (
  <CardDropdownContainer>
    <CardItemsContainer>
      { 
        cardItems.length 
        ? ( cardItems.map(cardItem => (
              <CardItem key={cardItem.id} item={cardItem} />
            ))
          ) 
        :
        (
          <EmptyMessageContainer>Your card is empty</EmptyMessageContainer>
        )
      }
    </CardItemsContainer>
    <CardDropdownButton onClick={ () => {
      history.push('/checkout');
      dispatch( toggleCardHidden() ); 
      } 
    }>
      GO TO CHECKOUT
    </CardDropdownButton>
  </CardDropdownContainer>
);

const mapStateToProps = createStructuredSelector ({
  cardItems: selectCardItems
});

export default withRouter(connect(mapStateToProps)(CardDropdown));