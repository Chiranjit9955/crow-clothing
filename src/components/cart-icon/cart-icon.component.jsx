import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ items, dispatch }) => (
  <div
    className="cart-icon"
    onClick={() => {
      dispatch(toggleCartHidden());
    }}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{items}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);
