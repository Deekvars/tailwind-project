<template>

  <div class="grid grid-cols-4 gap-4 container mx-auto mt-5 p-6">
      <product-card :item="item" v-for="item in resultData" :key="item.id" @update-count="$emit('update-header-cart')"></product-card>
  </div>

</template>

<script>
import ProductCard from "@/components/ProductCard";
import projectData from "@/globalVariables/config.json";

export default {
  components: {ProductCard},
  data() {
    return {
      resultData : projectData.data,
    }
  },
}
</script>