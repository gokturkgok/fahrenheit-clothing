import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { auth } from "../../firebase/firebase.utils";

import CardIcon from '../card-icon/card-icon.component';
import CardDropdown from "../card-dropdown/card-dropdown.component";
import { selectCardHidden } from '../../redux/card/card.selectors';
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer  to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer >
      <OptionLink to="/shop">
        SHOP
      </OptionLink>

      <OptionLink to="/shop">
        CONTACT
      </OptionLink>

      {
          currentUser ?
          (<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>)
          :
          (<OptionLink to="/signin">SIGN IN</OptionLink>)
      }

      <CardIcon />

    </OptionsContainer>
    {hidden ? null : <CardDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCardHidden
});

export default connect(mapStateToProps)(Header)