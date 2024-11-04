<template>
  <div 
  v-if="$settings.sections.twocollections.active"
   class=" overflow-hidden px-5 py-3 md:px-8 md:py-4 container h-screen  ">

      <carousel
        class="flex gap-5"
        :perPageCustom="[
          [768, 1],
          [1024, 2],
        ]"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :rtl="$store.state.language.code == 'AR' ? true : false"
      >
        <slide
          class="relative p-2 h-full"
          v-for="(item, i) in items"
          :key="i"
        >
          <nuxt-img
            class="object-cover h-[500px] w-full "
            alt="gift"
            :src="item.image.src"
          ></nuxt-img>
          <div
            class="absolute inset-0 flex justify-center flex-col items-center z-30 p-4"
          >
            <h1 class="font-tenor text-[24px] md:text-[36px] mb-1 uppercase">
              {{ item.title }}
            </h1>
            <p class="text-12px md:text-16px mb-1">{{ item.description }}</p>
            <button
              v-if="item.button.active"
              class="my-1 mx-[5px] text-white min-w-[90px] px-[11px] py-[10px] uppercase font-tenor-sans"
              :style="{ background: item.button.color }"
            >
              {{ item.button.text }}
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
      items: this.$settings.sections.twocollections.items,
    };
  },
  mounted() {
    console.log(this.items);
  },
};
</script>
