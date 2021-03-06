import React from 'react';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header({ cartLength }) {
  return (
    <Container>
      <Link to="/" exact>
        <img src={logo} alt="rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>{cartLength} items</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartLength: state.cart.length,
}))(Header);
