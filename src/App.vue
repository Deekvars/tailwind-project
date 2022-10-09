<template>
  <div id="app">

    <site-header :updated-count="cartCount"></site-header>

    <router-view @update-header-cart="cartCount+=1"></router-view>

    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default {
  components: {SiteFooter, SiteHeader},

  data() {
    return {
      cartCount : 0
    }
  }

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