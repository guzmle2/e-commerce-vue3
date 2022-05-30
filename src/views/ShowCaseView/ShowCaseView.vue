<script lang="ts" src="./ShowCaseView.ts"></script>
<style lang="scss">@import "ShowCaseView";</style>
<template>
  <section class="d-flex flex-wrap gap-3 py-5 px-2 justify-content-center w-100">
    <h1 class="text-center  text-muted w-100 py-5 animate__animated animate__bounceOut animate__infinite	infinite" v-if="!products.length">
      Cargando...
    </h1>
    <product-card v-for="pd in products"
                  class="animate__animated animate__fadeIn"
                  :key="pd.id"
                  :product="pd"/>
  </section>

</template>
