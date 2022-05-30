import { ActionTree } from 'vuex';
import { CartState } from '@/store/cart/state';
import { StateInterface } from '@/store';
import { IProduct } from '@/models/product.model';

const actions: ActionTree<CartState, StateInterface> = {


  async addProduct({ commit }, product: IProduct): Promise<void> {
    commit('addProduct', product);
  },

  async removeProduct({ commit }, id: number): Promise<void> {

    commit('removeProduct', id);
  },
  async clear({ commit }): Promise<void> {
    commit('clearCart');
  },
  async init({ commit }): Promise<void> {
    const cart = localStorage.getItem('cart');
    if (cart)
      JSON.parse(cart);
    commit('setCart', JSON.parse(cart??''));
  },


};


export default actions;
