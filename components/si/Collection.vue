<template>


  <!-- collection-section-1 -->
  <div
    v-if="type == 'simple'"
    class="w-[218px] h-[327px] md:h-[421px] md:w-[281px] relative flex justify-center items-center overflow-hidden"
  >
    <!-- Link around the image -->
    <nuxt-link
      class="flex pb-full w-full h-full"
      :aria-label="item.name"
      :to="computedLink"
    >
      <!-- Image Component -->
      <si-image
        class="absolute inset-0 object-cover w-[218px] h-[327px] md:h-[421px] md:w-[281px] transform transition-all duration-700 ease-in hover:scale-105 hover:opacity-90"
        :src="item.image ? item.image.src : '/fallback-image.jpg'"
        :alt="item.name"
      />
    </nuxt-link>

    <!-- Overlay with Item Name -->
    <div class="absolute left-0 w-full flex items-center justify-center z-50">
      <nuxt-link class="flex justify-center w-full" :to="computedLink">
        <span
          class="p-1 m-auto flex justify-center items-center px-3 leading-4 text-center text-black font-normal bg-white font-tenor-sans text-[16px] tracking-0.2em h-32px md:h-36px"
        >
          {{ item.name }}
          <span v-if="item.childrens.length > 0">
            ({{ item.childrens.length }})
          </span>
        </span>
      </nuxt-link>
    </div>
  </div>


   <!-- collection-section-2 -->
  <div
    v-else-if="type == 'two-collections'"
    class="w-full  px-10px py-10px h-[500px] relative flex justify-center items-center overflow-hidden"
  >
    <nuxt-link
      class="flex pb-full w-full h-full object-cover"
      :aria-label="item.name"
      :to="computedLink"
    >
      <!-- Image Component -->
      <si-image
        class="absolute inset-0 object-cover w-full h-full "
        :src="item.image ? item.image.src : '/fallback-image.jpg'"
        :alt="item.name"
      />
    </nuxt-link>

    <!-- Overlay with Item Name -->
    <div class="absolute left-0 w-full flex items-center justify-center z-50 gap-10px">
      <nuxt-link class="flex" to="/shop">
        <span
        style="background-color: #585065;"
          class="p-1 m-auto flex justify-center items-center  leading-4
           text-center text-white font-normal  font-tenor-sans text-[16px] tracking-0.2em px-20px py-3"
        >
          {{ item.name }}
          <span v-if="item.childrens.length > 0">
            ({{ item.childrens.length }})
          </span>
        </span>
      </nuxt-link>
       <nuxt-link class="flex" :to="computedLink">
        <span
        style="background-color: #585065;"
          class="p-1 m-auto flex justify-center items-center  leading-4
           text-center text-white font-normal  font-tenor-sans text-[16px] tracking-0.2em px-20px py-3"
        >
          {{ item.name }}
          <span v-if="item.childrens.length > 0">
            ({{ item.childrens.length }})
          </span>
        </span>
      </nuxt-link>
    </div>
  </div>


  <!-- collection-section-3 -->
  <div
    v-else-if="type == 'last-collections'"
    class="w-full h-screen relative  flex justify-center items-center overflow-hidden"
  >
    <nuxt-link
      class="flex pb-full w-full h-full"
      :aria-label="item.name"
      :to="computedLink"
    >
      <!-- Image Component -->
      <si-image
        class="absolute inset-0 object-cover w-full  h-full "
        :src="item.image ? item.image.src : '/fallback-image.jpg'"
        :alt="item.name"
      />
    </nuxt-link>

    <!-- Overlay with Item Name -->
    <div class="absolute bottom-5 right-5  w-full flex flex-col items-center justify-end z-50  gap-10px">

      <div class="text-white bg-red-500 ">
        <h1 class=" text-16px md:text-25px mb-4 font-tenor-sans uppercase">
            
          </h1>
          <p class=" text-12px md:text-16px mb-4">
          
          </p>
      </div> 
    <div class=" flex gap-10px justify-end w-full  "> 
      <nuxt-link class="flex " :to="computedLink">
        <span
        style="background-color: #333541;"
          class="p-1 m-auto flex justify-center items-center  leading-4 text-center px-20px py-3 uppercase
           text-white font-normal bg-buttons font-tenor-sans text-[16px] tracking-0.2em "
        >
          {{ item.name }}
          <span v-if="item.childrens.length > 0">
            ({{ item.childrens.length }})
          </span>
        </span>
    
      </nuxt-link>

      <nuxt-link class="flex " to="/shop">
        <span
        style="background-color: #333541;"
          class="p-1 m-auto flex justify-center items-center  leading-4 text-center px-20px py-3 uppercase
           text-white font-normal bg-buttons font-tenor-sans text-[16px] tracking-0.2em "
        >
          Shop all
        
        </span>
    
      </nuxt-link>
    </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "simple",
    },
    item: {
      type: Object,
      required: true,
      default: () => ({ childrens: [], name: "", image: null, slug: "" }),
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
