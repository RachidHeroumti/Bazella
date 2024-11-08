<template>
    <div class="flex justify-center items-center fixed z-10 inset-0 md:p-10 p-5 " v-if="$store.state.fullImage">
        <div @click="$store.state.fullImage=null" class=" absolute inset-0 bg-white"></div>
        <div class=" relative  flex  justify-center   h-full w-full"> 
            <si-image class="relative md:h-full w-full md:w-auto z-10 object-cover bg-white rounded-md shadow cursor-pointer"
            :src="$store.state.fullImage" :alt="`Full screen image`"/>
            
        <button @click="$store.state.fullImage=null" class="absolute bottom-5 z-30 gap-3 
          h-10 px-2 flex items-center justify-center w-full">

          <span class=" bg-white p-2 rounded-full"> 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
            viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
          </span>
          <span class=" bg-white p-2 rounded-full"> 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
            fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </span>
          <span class=" bg-white p-2 rounded-full"> 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
            viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
          </span>
        
        </button>
        
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        document.addEventListener('keydown', (e)=>{
            if(e.key == 'Escape' && this.$store.state.fullImage != null) this.$store.state.fullImage=null;
        })
    }
}
</script>