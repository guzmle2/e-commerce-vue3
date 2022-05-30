import { Options, Vue } from 'vue-class-component';
import { StateInterface } from '@/store';
import { useStore } from 'vuex';
import { IProduct } from '@/models/product.model';
import ProductCard from '@/components/Product/ProductCard/ProductCard.vue';


@Options({
  components: {
    ProductCard
  },
})
export default class ShowCaseView extends Vue {

  store = useStore<StateInterface>();

  get products(): IProduct[] {
    return this.store.getters['products/get'] ?? [];
  }

}
