import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// types
import { Item } from '../types';
// helpers
import { currencyFormat } from '../utils';
// assets
import shippingIcon from '../assets/images/ic_shipping.png';

const ListItem: FC<Item> = ({
  id,
  price,
  title,
  state_name,
  picture,
  free_shipping,
}) => {
  return (
    <article>
      <div className="list-item__wrapper">
        <figure>
          <Link to={`/items/${id}`}>
            <img src={picture} alt={title} />
          </Link>
        </figure>
        <aside>
          <div className='list-item__column-1'>
            <span className='list-item__price'>
              {currencyFormat(price.amount)} 
              {free_shipping && (
                <img src={shippingIcon} alt="free shipping icon" />
              )}
            </span>
            <p>{title}</p>
          </div>
          <div className='list-item__state-name'>{state_name}</div>
        </aside>
      </div>
    </article>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  state_name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool.isRequired,
};

export default ListItem;
