import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { togglePopup } from '../features/wishlist/wishlistSlice';

function WishlistButton() {
  const count = useSelector((state) => state.wishlist.items.length);
  const dispatch = useDispatch();

  return (
    <span onClick={() => dispatch(togglePopup())}>
      Saved Items ({count})
    </span>
  );
}

export default WishlistButton;
