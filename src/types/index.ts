export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};
export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  state_name: string;
  free_shipping: boolean;
};

export type ItemDetail = Item & {
  sold_quantity?: number;
  description?: string;
};

export type Author = {
  name: string;
  lastname: string;
};

export type ProductDetail = {
  author: Author;
  item: ItemDetail;
};

export enum ConditionEnum {
  new = 'new',
  used = 'used',
  nuevo = 'nuevo',
  usado = 'usado',
  unknown = 'NA',
};
