<template>
  <div>
    <slot>
      <img :src="singleImg">
    </slot>
  </div>

</template>

<script>

export default {
  props: ['single-img'],
  data(){
    return {

    }
  }
}
</script>