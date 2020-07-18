import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Item } from '../types';
import { Link } from 'react-router-dom';

const ListItem: FC<Item> = ({ id, price, title, state_name, thumbnail }) => {
  return (
    <article>
      <figure>
        <Link to={`/items/${id}`}>
          <img src={thumbnail} alt={title} />
        </Link>
      </figure>
      <aside>
        <div>
          <h2>{price}</h2>
          <p>{title}</p>
        </div>
        <div>{state_name}</div>
      </aside>
    </article>
  );
};

ListItem.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  state_name: PropTypes.string.isRequired,
};

export default ListItem;
