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
        {{ Item.offer }}  
      </p>  
    </div>  
    
    
    <div class="w-full flex md:py-26.6px md:px-32 uppercase items-center justify-center ">    
      <div class=" md:px-16px px-2">  
        <h1  
          class="pb-4px font-tenor-sans font-semibold md:font-normal tracking-0.2em text-[20px] md:text-[36px] uppercase text-center"  
        >  
          {{ days }} 
        </h1>  
        <p class="tracking-1.7px text-12px">Days</p>  
      </div> 
      <div class="md:px-16px px-2 border-s-black border-s">  
        <h1  
          class="pb-4px font-tenor-sans font-semibold md:font-normal tracking-0.2em text-[20px] md:text-[36px] uppercase text-center"  
        >  
          {{ hours }}  
        </h1>  
        <p class="tracking-1.7px text-12px">Hours</p>  
      </div>  
      <div class="md:px-16px px-2 border-s-black border-s">  
        <h1  
          class="pb-4px font-tenor-sans font-semibold md:font-normal tracking-0.2em text-[20px] md:text-[36px] uppercase text-center"  
        >  
          {{ minutes }}  
        </h1>  
        <p class="tracking-1.7px text-12px">Minutes</p>  
      </div>  
      <div class="md:px-16px px-2 border-s-black border-s">  
        <h1  
          class="pb-4px font-tenor-sans font-semibold md:font-normal tracking-0.2em  text-[20px] md:text-[36px] uppercase text-center"  
        >  
          {{ seconds }}  
        </h1>  
        <p class="tracking-1.7px text-12px">Seconds</p>  
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
      days: 3,  
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
      const countdownData = JSON.parse(localStorage.getItem('countdownData'));  
      if (countdownData) {  
        this.days = countdownData.days;  
        this.hours = countdownData.hours;  
        this.minutes = countdownData.minutes;  
        this.seconds = countdownData.seconds;  
      }  

      this.countdownInterval = setInterval(() => {  
        if (this.seconds === 0) {  
          if (this.minutes === 0) {  
            if (this.hours === 0) {  
              if (this.days === 0) {  
                clearInterval(this.countdownInterval);  
                return;  
              }  
              this.days--;  
              this.hours = 23;  
              this.minutes = 59;  
              this.seconds = 59;  
            } else {  
              this.hours--;  
              this.minutes = 59;  
              this.seconds = 59;  
            }  
          } else {  
            this.minutes--;  
            this.seconds = 59;  
          }  
        } else {  
          this.seconds--;  
        }  
      }, 1000);  
    },  
  },  
};  
</script>