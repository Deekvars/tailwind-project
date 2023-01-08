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
//import projectData from "@/globalVariables/config.json";
import AtcButton from "@/components/AtcButton";
import WishListButton from "@/components/WishListButton";
import axios from "axios";

export default {
  components: {WishListButton, AtcButton, ProductCard},
  data() {
    return {
      resultData : {},
    }
  },
  methods: {
    getData: function () {
      axios.get('http://localhost:3030/products')
          .then(resp => {
            console.log(resp);
            this.resultData = resp.data.data;
          })
          .catch(err => {
            console.log(err);
            this.resultData = {};
          })
    }
  },
  mounted() {
    this.getData();
  }
}
</script>