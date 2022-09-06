<template>
<!--  <div class="container mx-auto">-->
    <div id="product-card" class="border border-black">

      <img class="" :src="item.image" :alt="item.title">
      <span class="prod-title">{{ item.title }})</span>
      <span class="prod-price">{{ currency }} {{ item.price }}</span>
    </div>
<!--  </div>-->
</template>

<script>
export default {
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
<!--<script>

import projectData from "../globalVariables/config.json";

export default {
  name: 'Product-cards',
 data() {
   return {
     resultData : projectData.data,
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

</script>-->

