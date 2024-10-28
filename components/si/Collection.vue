<template>
    <!-- Wrapper div -->
    <div class="w-[218px] h-[327px] md:h-[421px] md:w-[281px]  relative flex justify-center items-center overflow-hidden">
      <!-- Link around the image -->
      <nuxt-link
        class="flex pb-full w-full h-full "
        :aria-label="item.name"
        :to="computedLink"
      >
        <!-- Image Component -->
        <si-image
  class="
  absolute inset-0 object-cover w-[218px] h-[327px] md:h-[421px] md:w-[281px] transform transition-all duration-700 ease-in hover:scale-105 hover:opacity-90"
  :src="item.image ? item.image.src : '/fallback-image.jpg'"
  :alt="item.name"
 />
      </nuxt-link>
      
      <!-- Overlay with Item Name -->
      <div class="absolute left-0 w-full  flex items-center justify-center z-50">
        <nuxt-link
          class="flex justify-center w-full"
          :to="computedLink"
        >
          <span class="p-1 m-auto flex justify-center items-center px-3 leading-4  text-center text-black font-normal bg-white font-tenor-sans  text-[16px] tracking-0.2em h-32px md:h-36px">
            {{ item.name }}
            <span v-if="item.childrens.length > 0">
              ({{ item.childrens.length }})
            </span>
          </span>
        </nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true,
        default: () => ({ childrens: [], name: '', image: null, slug: '' }),
      },
    },
    computed: {
      computedLink() {
        return this.item.childrens.length > 0
          ? `/collections/${this.item.slug}`
          : `/shop/${this.item.slug}`;
      },
    },
  };
  </script>
<style scoped>
.image {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-out, opacity 4s ease-out;
}

.image:hover {
  transform: scale(1.1);
  opacity: 0.75;
}
</style>
  