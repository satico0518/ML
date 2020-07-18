import React from 'react';
// redux
import { useSelector } from 'react-redux';
// types
import { AppState } from '../redux/types';
// helpers
import { currencyFormat, translateCondition } from '../utils';
// components
import Button from './Button';

const Product = () => {
  const { selectedItem } = useSelector((state: AppState) => state.items);
  const currentItem = selectedItem?.item;

  return (
    <main className="product__wrapper">
      <section>
        <figure>
          <img src={currentItem?.picture} alt={currentItem?.title} />
        </figure>
        <aside>
          <span>
            {translateCondition(currentItem?.condition || '')} -{' '}
            {currentItem?.sold_quantity || 0} vendidos
          </span>
          <span className='product__title'>{currentItem?.title}</span>
          <span className='product__price'>{currencyFormat(currentItem?.price.amount || 0)}</span>
          <span style={{ marginRight: 32 }}><Button text="Comprar"/></span>
        </aside>
      </section>
      <footer>
        <strong className="product__description-title">
          Descripción del Producto
        </strong>
        <article className="product__description-text">
          {currentItem?.description}
        </article>
      </footer>
    </main>
  );
};

export default Product;
