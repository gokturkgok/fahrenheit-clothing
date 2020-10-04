import React from 'react';
import { connect } from "react-redux";

import { toggleCardHidden } from "../../redux/card/card.actions";
import { selectCardItemsCount } from "../../redux/card/card.selectors";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { createStructuredSelector } from "reselect";

import './card-icon.styles.scss';

const CardIcon = ({toggleCardHidden, itemCount}) => (
    <div className='card-icon' onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
});

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCardItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);