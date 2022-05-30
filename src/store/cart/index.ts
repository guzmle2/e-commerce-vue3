import { Module } from 'vuex';
import state, { CartState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { StateInterface } from '@/store';


const cartModule: Module<CartState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};


export default cartModule;
