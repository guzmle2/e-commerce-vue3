import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { StateInterface } from '@/store';


@Options({
  components: {},
})
export default class NavBar extends Vue {

  store = useStore<StateInterface>();

  get totalBuy(): string {
    return this.store.getters['cart/getTotalAmount'];

  }

  get totalItem(): number {
    return this.store.getters['cart/totalItem'];
  }
}
