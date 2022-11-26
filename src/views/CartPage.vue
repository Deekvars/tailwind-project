<template>
  <div>
    <h1>Cart page</h1>
    <div class="grid grid-cols-4 gap-4 container mx-auto mt-5 p-6">
      <product-card :item="item" v-for="item in $store.state.productAddedToCart" :key="item.id"></product-card>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard";
export default {
  components: {ProductCard}
}
</script>