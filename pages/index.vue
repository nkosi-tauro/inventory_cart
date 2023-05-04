<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">All Products</h2>

    <div class="grid grid-cols-2 gap-7">
      <div v-for="product in products.data">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
//fetch products from supabase
const client = useSupabaseClient()
const { data: products, error} = await useAsyncData('products', async() => client.from('products').select('*').order('id') )

</script>

<style scoped></style>