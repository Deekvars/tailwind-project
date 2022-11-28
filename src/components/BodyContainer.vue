<template>

  <div class="grid grid-cols-4 gap-4 container mx-auto mt-5 p-6">
      <product-card :item="item" v-for="item in resultData" :key="item.id">
        <template #btnOne><atc-button :item="item" /></template>
        <template #btnTwo><wish-list-button :item="item" /></template>
      </product-card>
  </div>

</template>

<script>
import ProductCard from "@/components/ProductCard";
import projectData from "@/globalVariables/config.json";
import AtcButton from "@/components/AtcButton";
import WishListButton from "@/components/WishListButton";

export default {
  components: {WishListButton, AtcButton, ProductCard},
  data() {
    return {
      resultData : projectData.data,
    }
  },
}
</script>