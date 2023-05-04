<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">Cart</h2>
    <div class="card text-xl" v-if="cartStore.cart.length">
      <div v-for="product in cartStore.cart" class="flex gap-8 items-center">
        <img :src="product.img" :alt="product.title">
        <p class="text-white">{{ product.title }}</p>
        <p class="text-white">{{ product.price }} coins</p>
      </div>
    </div>
    <div v-else>
      <p class="text-white">Cart is Empty</p>
    </div>
  </div>
</template>

<script setup>

import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore()

</script>

<style scoped></style>