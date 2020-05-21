import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={ imageUrl } alt = 'item' />
    <ItemDetailsContainer>
      <span>{ name }</span>
      <span>{ quantity } X { price }</span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;