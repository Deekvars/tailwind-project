<template>
  <div>
    <slot>
      <img :src="item.image" :alt="item.title">
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