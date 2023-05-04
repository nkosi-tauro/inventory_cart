<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">Cart</h2>
    <div class="card text-xl" v-if="cart.length">
      <div v-for="product in cart" class="flex gap-8 items-center">
        <img :src="product.img" :alt="product.title">
        <p class="text-white">{{ product.title }}</p>
        <p class="text-white">{{ product.price }} coins</p>
      </div>
    </div>
    <div v-else><p class="text-white">Cart is Empty</p></div>
  </div>
</template>

<script setup>
const cart = useCart()

</script>

<style scoped>

</style>