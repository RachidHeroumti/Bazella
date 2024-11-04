<template >
    <div class="overflow-hidden container  px-5 py-3 md:px-8 md:py-4"> 
        <carousel class="flex" v-if="$settings.sections.slide_2.active"
            :perPageCustom="[[768, 1], [1024, 1]]" 
            :navigationEnabled="true"
            :paginationEnabled="false"
            :rtl="$store.state.language.code == 'AR' ? true : false">
    <slide
    class="flex max-w-full max-h-screen relative"
    v-for="(item,i) in items" :key="i"
      >
     
        <nuxt-img
          class="object-cover max-w-full"
          :src="item.image.src"
           alt="pic"
        >
        </nuxt-img>
        <div
          class="left-0 bg-white absolute m-[60px] p-[30px] md:w-[380px] text-black"
        >
          <h1
            class=" text-14px font-tenor-sans uppercase tracking-0.2em mb-[10px]"
          >
            New for 2024
          </h1>
          <h1 class=" text-16px md:text-25px mb-4 font-tenor-sans uppercase">
            {{ item.title }}
          </h1>
          <p class=" text-12px md:text-16px mb-4">
           {{ item.description }}
          </p>
          <button
           v-if="item.button.active"
            class="bg-black text-white min-w-[90px] px-[11px] py-[10px] uppercase font-tenor-sans"
          >
          <nuxt-link
           :to="item.button.url"
          >
            {{ item.button.text }}
          </nuxt-link>
          
          </button>
        </div>
     
    </slide>
  </carousel>
    </div>

  
</template>
<script>
export default {
  data() {
    return {
      items: this.$settings.sections.slide_2.items,
    };
  },
};
</script>
