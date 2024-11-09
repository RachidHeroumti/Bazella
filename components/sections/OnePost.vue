<template >
    <div
    class="overflow-hidden    md:px-8  md:mt-20 mt-10   bg-black md:bg-white "
    v-if=" this.$settings.sections.onepost.active"> 
  <div
    class="flex flex-col justify-center md:justify-normal max-w-full max-h-screen md:relative"
      >
     
      <nuxt-img  
  class="object-cover max-w-full"  
  :src="item.image?.src || ' '"  
  alt="pic"  
>  
</nuxt-img>  
        <div 
          class=" -mt-[50px]  md:mt-[60px] m-10px me-10px
            md:left-0 bg-white md:absolute  md:m-[60px] p-[20px]   md:w-[380px] text-black"
        >
          <h1
            class=" text-14px font-tenor-sans uppercase tracking-0.2em mb-[10px]"
          >
          {{ item.hint }}
          </h1>
          <h1 class=" text-16px md:text-25px mb-4 font-tenor-sans uppercase">
            {{ item.title }}
          </h1>
          <p class=" text-12px md:text-16px mb-4 font-poppins  w-full">
           {{ item.description }}
          </p>
          <button
           v-if="item.button.active"
            class="bg-black  text-white min-w-[90px] px-[11px] py-[10px] uppercase font-tenor-sans"
          >
          <nuxt-link
           :to="item.button.url"
          >
            {{ item.button.text }}
          </nuxt-link>
          
          </button>
        </div>
     
      </div> 
    </div>

  
</template>
<script>
export default {
  data() {
    return {
      item: this.$settings.sections.onepost,
    };
  },
};
</script>
