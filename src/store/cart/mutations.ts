import { MutationTree } from 'vuex';
import { CartState } from '@/store/cart/state';
import { IProduct } from '@/models/product.model';


const mutation: MutationTree<CartState> = {
  addProduct(state: CartState, product: IProduct): void {
    if ( !product.id) return;
    const _pd = state.carts.find((c: IProduct) => c.id == product.id);

    if ( !_pd) {
      state.carts = [
        ...state.carts,
        product
      ];
    } else {
      state.carts = [...state.carts].map((_: IProduct) => {
        if (_.id === product.id)
          _.buy = (_.buy ?? 0) + 1;
        return _;
      });
    }
    localStorage.setItem('cart', JSON.stringify(state.carts));
  },
  removeProduct(state: CartState, idProduct: number): void {
    const pd = state.carts.find(({ id }: IProduct) => id === idProduct);
    if ( !pd?.buy)
      state.carts = state.carts.filter(({ id }: IProduct) => id !== idProduct);
    else {
      state.carts = [...state.carts].map((cd: IProduct) => {
        if (cd.id === idProduct)
          cd.buy -= 1;
        return cd;
      });
    }
    localStorage.setItem('cart', JSON.stringify(state.carts));
  },
  clearCart(state: CartState): void {
    state.carts = [];
    localStorage.setItem('cart', JSON.stringify(state.carts));
  },
  setLoading(state: CartState, loading: boolean): void {
    state.isLoading = loading;
  },
  setCart(state: CartState, cart: IProduct[]): void {
    state.carts = [...cart];
  }

};


export default mutation;
