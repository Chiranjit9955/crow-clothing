import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, items }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{items}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  items: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
