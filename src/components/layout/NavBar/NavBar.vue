<script lang="ts" src="./NavBar.ts"></script>
<style lang="scss">@import "NavBar";</style>
<template>

  <nav class="nav-bar-component navbar navbar-expand-lg navbar-light bg-light ">
    <div class="d-flex justify-content-between w-100 container">
      <div class="logo-img" @click="$router.push('/')"></div>
      <div class="d-flex align-items-center gap-4"
           @click="$router.push('/cart')">
        <div>
          <span class="icon-carrito h1 " :class="{'cart-items':totalItem>0}" :data-content="totalItem"></span>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <span class="text-muted small lh-1">{{ totalBuy }}€</span>
          <span>Mi Carrito</span>
        </div>
      </div>
    </div>
  </nav>
</template>
