<script lang="ts" src="./ShoppingCartView.ts"></script>
<style lang="scss">@import "ShoppingCartView";</style>
<template>
  <div class=" shopping-cart-view container py-4">

    <div class="row">
      <div class="col-8">
        <h1 class="text-center text-muted w-100 py-5 " v-if="!products.length">
          Carro Vacio
        </h1>
        <div class="" v-else>
          <div class="header-title h1 bg-white m-0">Carrito</div>
          <product-card-cart v-for="pd in products"
                             class="animate__animated animate__fadeIn"
                             :key="pd.id"
                             :product="pd"/>

        </div>
        <div @click="$router.back()" class="cursor-pointer pt-3"> ← Seguir Comprando</div>
      </div>
      <div class="col-4">
        <div class="header-title px-4  py-3 bg-white ">
          <div class="d-flex justify-content-between">

            <div> {{ total }} articulo(s)</div>
            <div> {{ totalAmount }} €</div>
          </div>

        </div>
        <div class="card py-4 px-3">
          <button class="btn btn-lg py-3" id="finish-buy">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
