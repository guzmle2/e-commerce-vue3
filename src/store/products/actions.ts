import { ActionTree } from 'vuex';
import { StateInterface } from '@/store';
import api from '@/store/api';
import { IProduct } from '@/models/product.model';
import { ProductsState } from '@/store/products/state';

const actions: ActionTree<ProductsState, StateInterface> = {


  async get({ commit }, params?: { [T: string]: string }): Promise<void> {
    console.log(params);
    const {
      data,
      status
    } = await api.get<IProduct[]>(`/products`, { params });
    if (status == 200)
      commit('setProducts', data);
  },


};


export default actions;
