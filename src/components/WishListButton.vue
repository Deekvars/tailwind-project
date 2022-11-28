<template>
  <div class="m-2 bg-black text-white p-2 border rounded-lg cursor-pointer" @click="$store.dispatch({type: 'getProductWishlist', data: item})">Wishlist</div>
</template>

<script>
export default {
  props: ['item']
}
</script>