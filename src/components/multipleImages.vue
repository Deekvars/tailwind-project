<template>
  <div class="product-images">
    <slot>
      <img class="main-img" :src="item.image" :alt="item.title">
      <img v-if="item.hover_image" class="hover-img" :src="item.hover_image" :alt="item.title">
      <img v-else class="hover-img" :src="item.image" :alt="item.title">
    </slot>
  </div>

</template>

<script>

export default {
  props: ['item'],
  data(){
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.hover-img {
  display: none;
}
.product-images:hover .main-img {
  display: none;
}

.product-images:hover .hover-img {
  display: block;
}


/*.product-images {
  .hover-img {
    display: none;
  }
  &:hover {
    .main-img {
      display: none;
    }
    .hover-img {
      display: block;
    }
  }
}*/
</style>