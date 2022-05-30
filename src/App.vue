<template>
  <NavBar/>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Store, useStore } from 'vuex';
import { StateInterface } from '@/store';
import NavBar from '@/components/layout/NavBar/NavBar.vue';

@Options({
  components: { NavBar },
})
export default class App extends Vue {

  store: Store<StateInterface> = useStore<StateInterface>();

  mounted(): void {
    this.store.dispatch('products/get', { limit: 4 });
    this.store.dispatch('cart/init');

  }

}

</script>
<style lang="scss">@import "style";</style>
