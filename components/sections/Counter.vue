<template>
  <div v-if="$settings.sections.counter.active" 
  class="bg-bg_secendary gap-6 py-26.6px px-32 flex flex-col md:flex-row">
    <div class="w-full py-26.6px px-32">
      <h2 class="pb-15px font-tenor-sans tracking-0.2em text-3xl uppercase">
        {{ Item.title }}
      </h2>
      <p class="pb-15px block tracking-1.7px text-13.6px">
        {{ Item.offer }}
      </p>
    </div>
    <div class="w-full flex py-26.6px px-32 uppercase items-center">
      <div class="px-16px">
        <h1
          class="pb-4px font-tenor-sans tracking-0.2em text-3xl uppercase text-center"
        >
          1
        </h1>
        <p class="tracking-1.7px text-12px">Day</p>
      </div>
      <div class="px-16px border-s-black border-s">
        <h1
          class="pb-4px font-tenor-sans tracking-0.2em text-3xl uppercase text-center"
        >
          1
        </h1>
        <p class="tracking-1.7px text-12px">Hours</p>
      </div>
      <div class="px-16px border-s-black border-s">
        <h1
          class="pb-4px font-tenor-sans tracking-0.2em text-3xl uppercase text-center"
        >
          1
        </h1>
        <p class="tracking-1.7px text-12px">Minutes</p>
      </div>
      <div class="px-16px border-s-black border-s">
        <h1
          class="pb-4px font-tenor-sans tracking-0.2em text-3xl uppercase text-center"
        >
          1
        </h1>
        <p class="tracking-1.7px text-12px">Seconds</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Item: this.$settings.sections.counter,
    };
  },
  mounted() {
   
  },
};
</script>
