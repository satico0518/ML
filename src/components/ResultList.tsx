import React, { FC } from 'react';
// components
import ListItem from './ListItem';
// types
import { Item } from '../types';

interface Props {
  items: Item[];
}

const ResultList: FC<Props> = ({ items }) => {
  return (
    <section className="result-list">
      {items?.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          price={item.price}
          title={item.title}
          picture={item.picture}
          state_name={item.state_name}
          condition={item.condition}
          free_shipping={item.free_shipping}
        />
      ))}
    </section>
  );
};

export default ResultList;
