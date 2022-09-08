<template>
    <div id="product-card" class="border border-black">

      <img :src="item.image" :alt="item.title">
      <span>{{ item.title }})</span>
      <span>{{ currency }} {{ item.discounted_price }}</span>
      <span v-if="item.price > item.discounted_price">{{ currency }} {{ item.price }}</span>
    </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      currency: 'Rs.'
    }
  }

}
</script>


