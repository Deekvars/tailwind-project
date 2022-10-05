<template>
  <div id="app">

    <header>
      <div class="flex-1 relative grid grid-cols-3 gap-3 container mx-auto mt-6 p-6">
        <div class=""></div>
        <div class="search-box inline-block">
          <input class="w-96 p-0.5 pl-4 pr-4 bg-white shadow rounded" name="q" autocomplete="off" placeholder="Search">
        </div>
        <div class="inline-block absolute right-7 top-7"> Cart ({{ cartCount }})</div>
      </div>
    </header>

      <div class="grid grid-cols-4 gap-4 container mx-auto mt-5 p-6">
        <product-card :item="item" v-for="item in resultData" :key="item.id" @updated-count="cartCount +=1"></product-card>
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
      resultData : projectData.data,
      cartCount : 0
    }
  },
  /*methods: {
    increaseCount(){
      console.log('inc')
      this.cartCount +=1;
    }
  }*/

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