import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { replaceItems } from '../features/wishlist/wishlistSlice';

function WishlistUpdater() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    const storedItems = JSON.parse(window.localStorage.getItem('twinkdb-wishlist'));
    storedItems.length > 0 && dispatch(replaceItems(storedItems));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('twinkdb-wishlist', JSON.stringify(items));
  }, [items]);

  return null;
}

export default WishlistUpdater;
