import { Options, Vue } from 'vue-class-component';
import { IProduct } from '@/models/product.model';
import { Store, useStore } from 'vuex';
import { StateInterface } from '@/store';


@Options({
  components: {},
  props: {
    product: Object,
  }

})
export default class ProductActions extends Vue {
  product?: IProduct;
  store: Store<StateInterface> = useStore<StateInterface>();

  get isAdded(): boolean {
    return this.store.getters['cart/get'].find((e: IProduct) => e.id == this.product?.id) != null;
  }

  async onAddCart(): Promise<void> {
    await this.store.dispatch('cart/addProduct', this.product);
  }

  async onRemoveCart(): Promise<void> {
    await this.store.dispatch('cart/removeProduct', this.product?.id);
  }
}
