<template>
  <div class="bg-white text-black">
    <div>
      <div v-if="banner.items" class="relative w-full">
        <div class="relative w-full overflow-hidden ">
          <div
            class="flex transition-transform duration-1000 ease-in-out"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <div
              v-for="(item, i) in banner.items"
              :key="i"
              class="w-full flex-shrink-0 relative "
            >
              <nuxt-img
                width="100%"
                height="300"
                class="object-cover w-full h-48 md:h-screen bg-gray-200"
                :src="item.image ? item.image.src : $store.state.defaults.sliderImage"
                :alt="item.title"
                style="z-index: 10;" 
              />
              <div class=" bg-black text-white  absolute top-0 left-0 right-0 h-[40px] flex justify-center items-center "> 
                <h1 class=" w-full text-center text-13.6px font-poppins "
                >{{item.shipping.text }}</h1>
              </div>
              <div
                class="z-50 absolute left-0 top-0 w-full h-full flex flex-col items-center text-white"
                :class="i === '_1' ? 'justify-end' : 'justify-center'"
              >
               <h1 class=" uppercase font-tenor-sans text-[20px]  md:text-[36px]  lg:text-[63px] ">{{ item.title }}</h1>
               <p class=" my-[5px]">{{ item.description }}</p>
                <button class=" bg-black text-13.6px  text-white  uppercase px-[20px] py-[11px]" >
                  <nuxt-link 
                  :to="item.button.url">
                  {{ item.button.text}}
                  </nuxt-link>
              
                </button>
              </div>

              <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 "
          >
            <span
              v-for="(x, y) in banner.items"
              :key="y"
              :class="{
                'bg-gray-800': y === 'item_'+activeIndex,
                'bg-gray-300': y !== 'item_'+activeIndex,
              }"
              class="w-10 h-2 rounded-full cursor-pointer transition-colors duration-300"
            >
          </span>
          </div>
            </div> 

        

        </div>
      </div>

    
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      banner: this.$settings.sections.banner,
      autoplayInterval: null,
      toNextSlide: true,
      itemsLength: 0,
    };
  },
  mounted() {
    this.BannerItemsLength();
    this.startAutoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  },
  methods: {
    animate(index) {
      console.log("slide active",index);
      this.activeIndex = index;
      this.resetAutoplay();
    },
    BannerItemsLength() {  

  if (this.$settings && this.$settings.sections && this.$settings.sections.banner && typeof this.$settings.sections.banner.items === 'object' && this.$settings.sections.banner.items !== null) {  
    this.itemsLength = Object.keys(this.$settings.sections.banner.items).length;   
  } else {  
    console.log("🚀 ~ BannerItemsLength ~ banner items not available or not an object:");  
    this.itemsLength = 0;  
  }  
},
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        const totalSlides = this.itemsLength;
        if (this.activeIndex < 0 || this.activeIndex >= totalSlides - 1) {
          this.toNextSlide = !this.toNextSlide;
        }

        this.activeIndex += this.toNextSlide ? 1 : -1;
      }, 5000);
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
      }
    },
    resetAutoplay() {
      this.stopAutoplay();
      this.startAutoplay();
    },
  },
};
</script>

<style scoped>
.slider-item {
  position: relative;
}
</style>
