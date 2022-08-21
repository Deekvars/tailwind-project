<template>
  <div id="app">
<!--    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>-->

    <header>
      <div class="search-box mt-6">
        <input class="w-96 p-0.5 pl-4 pr-4 bg-white shadow rounded" name="q" autocomplete="off" placeholder="Search">
      </div>
    </header>
<!--    <div class="container mx-auto">-->
      <div class="product-card grid grid-cols-4 gap-1 container mx-20 max-w-fit mt-5">

        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
      </div>
<!--    </div>-->
    <footer></footer>
  </div>
</template>

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
<script>
import ProductCard from "@/components/Product-cards";
export default {
  components: {ProductCard}
}
</script>