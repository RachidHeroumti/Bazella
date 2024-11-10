<template>
  <div class="w-full bg-bg_secendary"> 
    <div class=" container "> 
  <div v-if="$settings.sections.counter.active"  
       class=" gap-2 md:gap-6 py-5px md:py-26.6px  flex flex-col md:flex-row "> 
    <div class="w-full pb-5  md:py-26.6px p-2  flex flex-col ">  
      <h2 class=" pb-5px  md:pb-15px font-tenor-sans tracking-0.2em text-[20px] md:text-[36px] uppercase w-full   text-center ">  
        {{ Item.title }}  
      </h2>  
      <p class=" md:pb-15px block tracking-1.7px text-13.6px w-full  text-center">  
        {{ Item.offer}}  
      </p>  
    </div>  
    
    
    <div class="w-full flex md:py-26.6px md:px-32 uppercase items-center justify-center ">    
      <div class=" md:px-16px px-2">  
        <h1  
          class="pb-4px font-tenor-sans font-semibold md:font-normal tracking-0.2em text-[20px] md:text-[36px] uppercase text-center"  
        >  
          {{ days }} 
        </h1>  
        <p class="tracking-1.7px text-12px">{{ Item.date.day_text }}</p>  
      </div> 
      <div class="md:px-16px px-2 border-s-black border-s">  
        <h1  
          class="pb-4px font-tenor-sans font-semibold md:font-normal tracking-0.2em text-[20px] md:text-[36px] uppercase text-center"  
        >  
          {{ hours }}  
        </h1>  
        <p class="tracking-1.7px text-12px">{{ Item.date.hours_text }}</p>  
      </div>  
      <div class="md:px-16px px-2 border-s-black border-s">  
        <h1  
          class="pb-4px font-tenor-sans font-semibold md:font-normal tracking-0.2em text-[20px] md:text-[36px] uppercase text-center"  
        >  
          {{ minutes }}  
        </h1>  
        <p class="tracking-1.7px text-12px">{{ Item.date.minutes_text }}</p>  
      </div>  
      <div class="md:px-16px px-2 border-s-black border-s">  
        <h1  
          class="pb-4px font-tenor-sans font-semibold md:font-normal tracking-0.2em  text-[20px] md:text-[36px] uppercase text-center"  
        >  
          {{ seconds }}  
        </h1>  
        <p class="tracking-1.7px text-12px">{{ Item.date.second_text }}</p>  
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
      Item: this.$settings.sections.counter,
      dateFrom: this.$settings.sections.counter.date.from, // Format: "dd-mm-yyyy"
      dateTo: this.$settings.sections.counter.date.to, // Format: "dd-mm-yyyy"
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdownInterval: null,
    };
  },
  mounted() {
    this.startCountdown();
  },
  beforeUnmount() {
    clearInterval(this.countdownInterval);
    localStorage.setItem('countdownData', JSON.stringify({
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    }));
  },
  methods: {
    startCountdown() {
      const dateTo = new Date(
        this.dateTo.split('-').reverse().join('-') // Convert "dd-mm-yyyy" to "yyyy-mm-dd" for parsing
      );
      const now = new Date();

      if (dateTo <= now) {
        clearInterval(this.countdownInterval);
        return;
      }

      this.updateCountdown(dateTo);

      this.countdownInterval = setInterval(() => {
        this.updateCountdown(dateTo);
      }, 1000);
    },
    updateCountdown(targetDate) {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(this.countdownInterval);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        return;
      }

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    },
  },
};
  
</script>