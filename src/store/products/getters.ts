import { GetterTree } from 'vuex';
import { StateInterface } from '@/store';
import { IProduct } from '@/models/product.model';
import { ProductsState } from '@/store/products/state';

const getters: GetterTree<ProductsState, StateInterface> = {
  get({ products }: ProductsState): IProduct[] {
    return products ?? [];
  },
  isLoading({ isLoading }: ProductsState): boolean {
    return isLoading;
  }
};
export default getters;
