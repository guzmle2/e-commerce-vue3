import { Options, Vue } from 'vue-class-component';
import { IProduct } from '@/models/product.model';
import { Store, useStore } from 'vuex';
import { StateInterface } from '@/store';
import ProductActions from '@/components/Product/ProductActions/ProductActions.vue';


@Options({
  components: {
    ProductActions
  },
  props: {
    product: Object,
  }

})
export default class ProductCardCart extends Vue {
  product?: IProduct;
  store: Store<StateInterface> = useStore<StateInterface>();

  get price() {
    if ( !this.product) return 0;
    return ((this.product.price ?? 0) * ((this.product.buy ?? 1)
      + 1)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString();
  }
}
