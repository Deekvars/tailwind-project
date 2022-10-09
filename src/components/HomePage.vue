<template>

  <body-container @update-header-cart="$emit('update-header-cart')"></body-container>

</template>

<script>
import BodyContainer from "@/components/BodyContainer";

export default {
  components: {BodyContainer},
  props: ['update-header-cart']
}
</script>

