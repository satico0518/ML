import React from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';

const ProductDetail: React.FC<RouteComponentProps> = () => {
  const { id } = useParams();

  return <div>ProductDetail Id: {id}</div>;
};

export default ProductDetail;
