import React from 'react';
import { connect } from "react-redux";

import { toggleCardHidden } from "../../redux/card/card.actions";
import { selectCardItemsCount } from "../../redux/card/card.selectors";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { createStructuredSelector } from "reselect";

import { CardContainer, ItemCountContainer } from './card-icon.styles';

const CardIcon = ({toggleCardHidden, itemCount}) => (
    <CardContainer onClick={toggleCardHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CardContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
});

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCardItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);