<template>
  <div class="card flex items-center gap-8">
    <img :src="product.img" :alt="product.title">
    <div>
      <p class="text-2xl text-secondary">{{ product.title }}</p>
      <p class="text-xl text-gray-50">{{ product.description }}</p>
      <p class="text-lg text-secondary my-3">{{ product.price }} Sliver Coins</p>
      <button class="btn" @click="addToCart()">
        <span v-if="isInCart()">Remove from Cart</span>
        <span v-else>Add to Basket</span>
      </button>
    </div>
  </div>
</template>

<script setup>

const { product } = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cart = useCart()

function isInCart(){
  return !!cart.value.find(cart => cart.title === product.title)
}

function addToCart() { 
  if(!isInCart()) {
    cart.value.push({ 
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      description: product.description
    })
  }
  else{
    cart.value = [...cart.value.filter(cart => cart.title !== product.title)]
  }
}

</script>

<style  scoped>


</style>