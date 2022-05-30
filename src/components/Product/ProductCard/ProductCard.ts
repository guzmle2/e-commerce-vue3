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
export default class ProductCard extends Vue {
  product?: IProduct;
  store: Store<StateInterface> = useStore<StateInterface>();

  get stars(): number[] {
    return Array.from({ length: Math.floor(this.product?.rating.rate ?? 0) }, (_, i) => i + 1);
  }


}
