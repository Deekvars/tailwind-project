<template>
  <header>
    <div class="flex-1 relative grid grid-cols-3 gap-3 container mx-auto mt-6 p-6">

      <div class="">
        <router-link to="/" class="inline-block absolute">
          <img src="../assets/logo.png" alt="logo" class="h-10 mx-auto cursor-pointer">
        </router-link>

      </div>
      <div class="search-box inline-block">
        <input class="w-96 p-0.5 pl-4 pr-4 bg-white shadow rounded" name="q" autocomplete="off" placeholder="Search">
      </div>

      <div class="relative">
        <router-link to="/wishlist" class="inline-block absolute">Wishlist ({{ $store.state.wishlistCount }})</router-link>
        <router-link to="/cart" class="inline-block absolute right-7"> Cart ({{ $store.state.count }})</router-link>
      </div>

    </div>
  </header>
</template>

