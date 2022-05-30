import { createStore } from 'vuex';
import { CartState } from '@/store/cart/state';
import cartModule from '@/store/cart';
import { ProductsState } from '@/store/products/state';
import productsModule from '@/store/products';


export interface StateInterface {
  cart: CartState,
  products: ProductsState
}

export default createStore<StateInterface>({
  modules: {
    cart: cartModule,
    products: productsModule
  }
});
