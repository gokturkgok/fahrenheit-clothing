import React from 'react'
import { CardItemContainer, CardItemImage, ItemDetailsContainer } from './card-item.styles';

import './card-item.styles.scss';

const CardItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CardItemContainer>
        <CardItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>
                ${price} x {quantity}
            </span>
        </ItemDetailsContainer>
    </CardItemContainer>
);

export default CardItem;