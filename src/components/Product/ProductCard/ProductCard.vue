<script lang="ts" src="./ProductCard.ts"></script>
<style lang="scss">@import "ProductCard";</style>
<template>
  <div class="product-card-component mb-5">
    <div class="pd__img py-5 px-3 mb-4">
      <img :src="product.image" :alt="product.title">
      <div class="pd__actions ">
        <product-actions :product="product"/>
        <button type="button" class="btn btn-light">
          <span class="icon-ojo h1"></span>
        </button>

      </div>
      <div class="w-100 pd__info">
        <div class="pd__info--rating">

          <span class="icon-estrella" v-for="star of stars" :key="star"></span>
          <span class="small text-muted">({{ product.rating.rate }})</span>
        </div>
        <div class="pd__info--offer">-8%</div>
      </div>
    </div>
    <div class="pd__title">{{ product.title }}</div>
    <div class="fw-bold">{{ product.price }} €
      <span class="pd--price__offer">{{ product.price }} €</span>
    </div>
  </div>

</template>
