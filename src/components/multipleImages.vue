<template>
  <div class="product-images">
      <img class="main-img" :src="activeImage" alt="">
    <span class="img-arrows">
      <span class="prev-arrow arrow" @click="prevImage(multipleImg)">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12.264 21.699" style="transform: rotate(180deg);"><defs></defs><path d="M-74,254.8l10.142,10.142L-74,275.084" transform="translate(74.707 -254.092)" class="a"></path></svg>
      </span>
      <span class="next-arrow arrow" @click="nextImage(multipleImg)">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12.264 21.699"><defs></defs><path d="M-74,254.8l10.142,10.142L-74,275.084" transform="translate(74.707 -254.092)" class="a"></path></svg>
      </span>
    </span>

  </div>

</template>

<script>

export default {
  props: ['multipleImg'],
  data(){
    return {
      activeImage: this.multipleImg[0]
    }
  },
  methods: {

    nextImage: function(images) {
      if(images){
        for(let i = 0 ; i < images.length ; i++){
          if(images[i] === this.activeImage && i !== images.length-1){
            this.activeImage = images[i+1];
            break;
          }
        }
      }
    },
    prevImage: function(images) {
      if(images){
        for(let i = 0 ; i < images.length ; i++){
          if(images[i] === this.activeImage && i !== 0){
            this.activeImage = images[i-1];
            break;
          }
        }
      }
    },
  }
}
</script>

<style lang="css" scoped>
.product-images {
  position: relative;
}
.img-arrows {
  position: absolute;
  top: 50%;
  width: 100%;
  left: 0;
}
.arrow{
  background-color: #fff;
  padding: 5px;
  display: inline-block;
  position: absolute;
  border: 1px solid #999;
  border-radius: 50%;
}
.prev-arrow {
  left: 0;
}
.next-arrow {
  right: 0;
}
</style>