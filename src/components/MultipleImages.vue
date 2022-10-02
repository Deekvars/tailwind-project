<template>
  <div class="relative">
      <img :src="activeImage" alt="">
    <span class="absolute top-1/2 w-full left-0">
      <span class="bg-white p-1 inline-block absolute border border-gray-300 rounded-full cursor-pointer left-0" @click="changeImage('previous')">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12.264 21.699" style="transform: rotate(180deg);"><defs></defs><path d="M-74,254.8l10.142,10.142L-74,275.084" transform="translate(74.707 -254.092)" class="a"></path></svg>
      </span>
      <span class="bg-white p-1 inline-block absolute border border-gray-300 rounded-full cursor-pointer right-0" @click="changeImage('next')">
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

    changeImage(type) {
      let currImg = this.multipleImg.find(img => img === this.activeImage);

      let currIndex = 0;
      if(currImg) currIndex = this.multipleImg.findIndex((x)=> x === this.activeImage);

      if(currIndex > 0 && type === 'previous') this.activeImage = this.multipleImg[currIndex - 1];
      else if(currIndex < this.multipleImg.length-1 && type === 'next') this.activeImage = this.multipleImg[currIndex + 1];
      },

    /*changeImage: function(type) {
         let images = type === 'previous' ? [...this.multipleImg].reverse() : [...this.multipleImg];

         for(let i = 0 ; i < images.length ; i++){
           if(images[i] === this.activeImage && i !== images.length-1){
             this.activeImage = images[i+1];
             break;
           }
         }
       },*/
  }
}
</script>
