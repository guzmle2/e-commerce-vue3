<script lang="ts" src="./ProductCardCart.ts"></script>
<style lang="scss">@import "ProductCardCart";</style>
<template>
  <div class="card product-card-cart ">
    <div class="d-flex justify-content-around gap-4">
      <div class="d-flex gap-4 align-items-center justify-content-between w-100">

        <img :src="product.image" :alt="product.title">
        <div> {{ product.title }}</div>
        <div>

          <div class="fw-bold text-center"> {{ price }}€</div>
          <div v-if="product.buy>0" class="small text-muted text-nowrap">(1 ={{ product.price }}€)</div>
        </div>
      </div>
      <product-actions :product="product"/>
    </div>

  </div>

</template>
