<script lang="ts" src="./ProductActions.ts"></script>
<style lang="scss">@import "ProductActions";</style>
<template>
  <button v-if="!isAdded" @click="onAddCart()" type="button" class="btn btn-light">
    <span class="icon-carrito h1"></span>
  </button>
  <span v-else class="d-flex justify-content-center align-items-center gap-3">
    <button @click="onRemoveCart()" type="button" class="btn  my-2">
      -
    </button>
    <span class="h3"> {{ (product.buy ?? 0) + 1 }}</span>
    <button @click="onAddCart()" type="button" class="btn  my-2 ">
      +
    </button>
  </span>

</template>
