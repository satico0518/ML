import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
// components
import SearchBar from '../../components/SearchBar';
import { Breadcrumb } from '../../components/Breadcrumb';
import Product from '../../components/Product';
import Loader from '../../components/Loader';
// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  setQueryAction,
  getProductDetailByIdAction,
} from '../../redux/actions/item.actions';
// types
import { AppState } from '../../redux/types';
import { loadingAction } from '../../redux/actions/ui.actions';

const ProductDetail: React.FC<RouteComponentProps> = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: AppState) => state.ui);

  useEffect(() => {
    dispatch(setQueryAction(''));
    dispatch(loadingAction(true));
    dispatch(getProductDetailByIdAction(id));
    // eslint-disable-next-line
  }, [id]);
  return (
    <main className="product-detail__wrapper">
      <SearchBar />
      <section className="product-detail__content">
        <Breadcrumb />
        {loading ? <Loader /> : <Product />}
      </section>
    </main>
  );
};

export default ProductDetail;
