import React from 'react';
import { Link } from 'react-router-dom';

const breadcumbItems = [
  'Electronica, Audio y Video',
  'iPod',
  'Reproductores',
  'iPod touch',
  '32 GB',
];

export const Breadcrumb = () => {
  return (
    <ul className="breadcrumb">
      {breadcumbItems.map((item, i) => {
        return (
          <li key={item}>
            <Link to={`/items?search=${item}`}>
              {item}
            </Link>
            {' '} {i < breadcumbItems.length - 1 ? ' >' : null}
          </li>
        );
      })}
    </ul>
  );
};
