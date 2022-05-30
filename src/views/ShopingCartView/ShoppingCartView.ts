import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { StateInterface } from '@/store';
import { IProduct } from '@/models/product.model';
import ProductCardCart from '@/components/Product/ProductCardCart/ProductCardCart.vue';


@Options({
  components: {
    ProductCardCart
  },
})
export default class ShoppingCartView extends Vue {

  store = useStore<StateInterface>();

  get products(): IProduct[] {
    return this.store.getters['cart/get'] ?? [];
  }

  get total(): number {
    return this.store.getters['cart/totalItem'];
  }
  get totalAmount(): number {
    return this.store.getters['cart/getTotalAmount'];
  }
}
