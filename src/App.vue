<template>
  <div id="app">

    <header>
      <div class="search-box mt-6">
        <input class="w-96 p-0.5 pl-4 pr-4 bg-white shadow rounded" name="q" autocomplete="off" placeholder="Search">
      </div>
    </header>

      <div class="grid grid-cols-4 gap-4 container mx-20 max-w-fit mt-5">
        <product-card :item="item" v-for="item in resultData" :key="item.id"></product-card>
      </div>

    <footer></footer>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import projectData from "@/globalVariables/config.json";

export default {
  name: 'Product-card',
  components: {ProductCard},

  data() {
    return {
      resultData : projectData.data
    }
  },

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>