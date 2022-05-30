import { IProduct } from '@/models/product.model';

export interface CartState {
  isLoading: boolean;
  carts: IProduct[];
}

function state(): CartState {
  return {
    isLoading: true,
    carts: [],
  };
}

export default state;
