import React from 'react';
import { withRouter } from 'react-router-dom';
import { BackgroundImageContainer, ContentContainer, ContentTitle, MenuItemContainer, ContentSubtitle } from './menu-item.styles';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer
        size={size}
        onClick = {() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer
            imageUrl={imageUrl}
            className='background-image'
        />
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>Shop Now</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>

);

export default withRouter(MenuItem);