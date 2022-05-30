import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { StateInterface } from '@/store';
import state, { ProductsState } from '@/store/products/state';


const productsModule: Module<ProductsState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};


export default productsModule;
