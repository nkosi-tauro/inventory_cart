<template>
  <div>
    <header>
      <NuxtLink to="/">
        <h1>Adventure Store</h1>
      </NuxtLink>
      <NuxtLink to="/cart">
        <h1>Cart</h1>
      </NuxtLink>
    </header>

    <div>
      <slot/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>