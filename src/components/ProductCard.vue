<template>
    <div id="product-card" class="border border-gray-300 p-0.5">

      <div v-if="typeof(item.image) === 'string'">
        <single-image :single-img="item.image"></single-image>
      </div>
      <div v-else-if="typeof(item.image) === 'object'">
        <multiple-images :multiple-img="item.image"></multiple-images>
      </div>

      <div class="flex-1">
        <div class="mb-3">{{ item.title }})</div>
        <span>{{ currency }} {{ item.discounted_price }}</span>
        <span class="ml-2.5 text-gray-500" v-if="item.price > item.discounted_price">
          <del>{{ currency }} {{ item.price }}</del></span>
      </div>

    </div>
</template>

<script>
import SingleImage from "@/components/SingleImage";
import MultipleImages from "@/components/MultipleImages";
export default {
  components: {MultipleImages, SingleImage},
  props: ['item'],
  data() {
    return {
      currency: 'Rs.'
    }
  }
}
</script>


