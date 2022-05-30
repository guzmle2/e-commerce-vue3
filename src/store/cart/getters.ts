import { GetterTree } from 'vuex';
import { StateInterface } from '@/store';
import { CartState } from '@/store/cart/state';
import { IProduct } from '@/models/product.model';

const getters: GetterTree<CartState, StateInterface> = {
  get({ carts }: CartState): IProduct[] {
    return carts ?? [];
  },
  getTotalAmount({ carts }: CartState): string {
    if (carts?.length == 0) return '0';
    const prices = [...carts].map((product: IProduct) => (product.price ?? 0) * (product.buy ? (product.buy + 1) : 1));
    const price = prices.reduce((a: number, b: number) => a + b);
    return (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString();
  },
  totalItem({ carts }: CartState): number {
    if (carts.length == 0) return 0;
    const total = [...carts].map(e => !e.buy ? 1 : (+e.buy + 1));
    return total.reduce((a, b) => a + b);
  },
  isLoading({ isLoading }: CartState): boolean {
    return isLoading;
  }
};
export default getters;
