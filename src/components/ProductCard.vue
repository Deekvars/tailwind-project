<template>
    <div id="product-card" class="border border-black">

<!--      <img :src="item.image" :alt="item.title">-->
      <single-image :item="item"></single-image>
      <multiple-images :item="item"></multiple-images>
      <span>{{ item.title }})</span>
      <span>{{ currency }} {{ item.discounted_price }}</span>
      <span v-if="item.price > item.discounted_price">{{ currency }} {{ item.price }}</span>
    </div>
</template>

<script>
import SingleImage from "@/components/singleImage";
import MultipleImages from "@/components/multipleImages";
export default {
  components: {MultipleImages, SingleImage},
  props: ['item'],
  data() {
    return {
      currency: 'Rs.'
    }
  },
  methods() {
    return{
      priceFormatter: function(price) {
        return price.toString().concat('.00');
      }
    }

  }
}
</script>


