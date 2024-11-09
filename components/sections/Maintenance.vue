<template>
    <!--  -->
    <div class="h-screen bg-gray-100" v-if="$settings && checkCodeCookie">
      <!--  -->
      <div class="max-w-md mx-auto h-full flex items-center justify-center">
        <!--  -->
        <div class="flex flex-col items-center p-2">
          <!--  -->
          <nuxt-img class="w-full h-full object-cover" src="https://storeno.b-cdn.net/stores/2-2024/1707157555613.png" alt="maintenance" preload loading="lazy" />
          <!--  -->
          <div class="flex flex-col gap-3">
            <p class="text-lg text-gray-900 font-medium text-center">{{ $settings.store_maintenance_message }}</p>
            <!--  -->
            <form class="flex items-center justify-center gap-2" >
              <!--  -->
              <div class="flex text-base border border-gray-300 rounded-md p-2 text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all">
                <!--  -->
                <input class="bg-transparent outline-none" type="text" v-model="code" placeholder="••••••••" />
                <!--  -->
              </div>
              <!--  -->
              <button class="bg-blue-500 border border-blue-300 rounded-md p-2 opacity-70 hover:opacity-100 transition-all" 
              @click="verifier"
              >
                <!--  -->
                <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="20px" height="200px" viewBox="0 0 24 24" fill="none">
                  <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M17.811 6.5C17.1449 3.91216 14.7958 2 12 2C10.223 2 8.62643 2.7725 7.52779 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <!--  -->
              </button>
            </form>
          </div>
        </div>
        <!--  -->
      </div>
      <!--  -->
    </div>
    <!--  -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        code: null,
        codeMaintenance: null,
        checkCodeCookie: false,
      }
    },
    mounted() {
      this.getCookie("store_maintenance_code");
      if (this.codeMaintenance && this.codeMaintenance !== "undefined") {
        this.$settings.store_maintenance_unlocked = true;
        this.$settings.store_maintenance = false;
      } else {
        this.checkCodeCookie = true;
      }
    },
    methods: {
      verifier() {
         console.log("code come from store : ",this.$settings.store_maintenance_code) ;
        if (this.$settings.store_maintenance_code === this.code) {
          document.cookie = `store_maintenance_code=${this.code}`;
          this.$settings.store_maintenance_unlocked = true;
          this.$settings.store_maintenance = false;
          this.$emit("openStore", true);
        }
      },
      getCookie(cname) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i].trim();
          if (c.indexOf(name) === 0) {
            this.codeMaintenance = c.substring(name.length, c.length);
            break;
          }
        }
      }
    }
  }
  </script>