<template>
  <header>
    <div class="flex-1 relative grid grid-cols-3 gap-3 container mx-auto mt-6 p-6">
      <div class=""></div>
      <div class="search-box inline-block">
        <input class="w-96 p-0.5 pl-4 pr-4 bg-white shadow rounded" name="q" autocomplete="off" placeholder="Search">
      </div>

      <div class="relative">
        <router-link to="/wishlist" class="inline-block absolute">Wishlist</router-link>
        <router-link to="/cart" class="inline-block absolute right-7"> Cart ({{ updatedCount }})</router-link>
      </div>

    </div>
  </header>
</template>

<script>

export default {
  props: ['updatedCount']

}
</script>
