import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { togglePopup, remove, check } from '../features/wishlist/wishlistSlice';

import TitleWithImage from './TitleWithImage';
import Icon from './Icon';

import './Wishlist.scss';

function Wishlist() {
  const images = {
    heading: {
      src: require('../assets/images/wishlist.png'),
      alt: 'Wishlist',
    },
  };

  const isOpen = useSelector((state) => state.wishlist.isOpen);
  const items = useSelector((state) => state.wishlist.items);
  const isEmpty = items.length === 0;

  const dispatch = useDispatch();

  useEffect(() => {
    window.$WowheadPower.refreshLinks();
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.$WowheadPower.refreshLinks();
    }
  }, [items]);

  const content = () => {
    if (isEmpty) {
      return <h3>You haven't saved any items yet.</h3>;
    }

    return items.map((item, index) => {
      return (
        <div
          className={`Wishlist__item${item.checked ? ' checked' : ''}`}
          key={`wishlist-item-${index}`}
        >
          <a href={item.url} data-wh-icon-size="small">
            item
          </a>

          <div className="Wishlist__item-actions">
            <span
              className="Wishlist__item-check"
              onClick={() => dispatch(check(index))}
            >
              &#10004;
            </span>

            <span
              className="Wishlist__item-remove"
              onClick={() => dispatch(remove(index))}
            >
              &#10060;
            </span>
          </div>
        </div>
      );
    });
  };

  const onCloseClick = (event) => {
    event.preventDefault();
    dispatch(togglePopup());
  };

  return (
    <div className={`Wishlist${isOpen ? ' active' : ''}`}>
      <div className="container">
        <a href="/" className="Wishlist__close" onClick={onCloseClick}>
          <span>Close</span> <Icon name="arrow-right" />
        </a>

        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Saved Items"
        />

        <hr />

        <div className="Wishlist__items">{content()}</div>
      </div>
    </div>
  );
}

export default Wishlist;
