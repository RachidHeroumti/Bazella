<template>
  <div class="bg-white text-black">
    <div>
      <div v-if="banner.items" class="relative w-full">
        <div class="relative w-full overflow-hidden">
          <!-- Main Image Container -->
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <div
              v-for="(item, i) in banner.items"
              :key="i"
              class="w-full flex-shrink-0 relative"
            >
              <nuxt-img
                width="100%"
                height="300"
                class="object-cover w-full h-48 md:h-screen bg-gray-200"
                :src="item.image ? item.image.src : $store.state.defaults.sliderImage"
                :alt="item.title"
                style="z-index: 10;" 
              />
              <div
                class="z-50 absolute left-0 top-0 w-full h-full flex flex-col items-center text-white"
                :class="i === '_1' ? 'justify-end' : 'justify-center'"
              >
               <h1 class=" uppercase font-tenor-sans text-[63px] tracking-0.25rem">{{ item.title }}</h1>
               <p class=" my-[5px]">{{ item.description }}</p>
                <button class=" bg-black text-13.6px  text-white  uppercase px-[20px] py-[11px]" >
                  <nuxt-link 
                  :to="item.button.url">
                  {{ item.button.text}}
                  </nuxt-link>
              
                </button>
              </div>
            </div> 

          <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
          >
            <span
              v-for="(x, y) in banner.items"
              :key="y"
              :class="{
                'bg-gray-800': y === activeIndex,
                'bg-gray-300': y !== activeIndex,
              }"
              class="w-10 h-2 rounded-full cursor-pointer transition-colors duration-300"
              @click="animate(y)"
            ></span>
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
    this.startAutoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  },
  methods: {
    animate(index) {
      this.activeIndex = index;
      this.resetAutoplay();
    },
    BannerItemsLenght() {
      let i = 0;
      for (let item of this.banner.items) {
        i++;
      }
      this.itemsLength = i;
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        const totalSlides = this.banner.items.length;
        if (this.activeIndex < 0 || this.activeIndex >= 3 - 1) {
          this.toNextSlide = !this.toNextSlide;
        }

        this.activeIndex += this.toNextSlide ? 1 : -1;
      }, 2000);
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
