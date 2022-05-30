import { IProduct } from '@/models/product.model';

export interface ProductsState {
  isLoading: boolean;
  products: IProduct[];
  page: number;
}

function state(): ProductsState {
  return {
    isLoading: true,
    products: [],
    page: 1
  };
}

export default state;
