import { MutationTree } from 'vuex';
import { IProduct } from '@/models/product.model';
import { ProductsState } from '@/store/products/state';


const mutation: MutationTree<ProductsState> = {
  setProducts(state: ProductsState, product: IProduct[]): void {
    if ( !product.length) return;
    state.products = [
      ...state.products,
      ...product
    ];
  },

};


export default mutation;
