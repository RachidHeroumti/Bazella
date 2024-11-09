<template>  
  <div class="flex justify-center items-center fixed z-10 inset-0 md:p-10 p-5" v-if="$store.state.fullImage">  
      <div @click="$store.state.fullImage=null" class="absolute inset-0 bg-white"></div>  
      <div class="relative flex justify-center h-full w-full">   
          <div class="image-container" @click="zoomImage">  
              <si-image class="relative md:h-full w-full md:w-auto z-10 object-cover bg-white rounded-md shadow cursor-pointer"  
              :src="$store.state.fullImage" :alt="`Full screen image`" />  
              <div v-if="zoomed" class="zoom-viewport" :style="zoomStyles">  
                  <si-image :src="$store.state.fullImage" alt="Zoomed image" class="zoomed-image" :style="imageStyles" />  
              </div>  
          </div>  
          
          <button @click="$store.state.fullImage=null" class="absolute bottom-5 z-30 gap-3 h-10 px-2 flex items-center justify-center w-full">  
              <span class="bg-white p-2 rounded-full">   
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>  
              </span>  
          </button>  
      </div>  
  </div>  
</template>  

<script>  
export default {  
  data() {  
      return {  
          zoomed: false,  
          zoomStyles: {},  
          mouseX: 0,  
          mouseY: 0,  
      };  
  },  
  computed: {  
      imageStyles() {  
        console.log(this.mouseX ,this.mouseY) ;
          return {  
              transformOrigin: `${this.mouseX}px ${this.mouseY}px`, // Dynamic transform origin  
              transform: 'scale(2)', // Scale to 2 times  
              transition: 'transform 0.5s ease', // Smooth transition  
          };  
      }  
  },  
  methods: {
  zoomImage(event) {
    // Get the image element's bounding rectangle
    const rect = event.target.getBoundingClientRect();

    // Calculate mouse position relative to the image
    const relativeX = (event.clientX - rect.left) / rect.width * 100;
    const relativeY = (event.clientY - rect.top) / rect.height * 100;

    this.mouseX = relativeX; // Set as percentage of width
    this.mouseY = relativeY; // Set as percentage of height
    this.zoomed = !this.zoomed; // Toggle zoom state

    if (this.zoomed) {
      this.zoomStyles = {
        top: `${event.clientY - 100}px`, // Center viewport vertically
        left: `${event.clientX - 100}px`, // Center viewport horizontally
        width: '200px', // Width of zoom viewport
        height: '200px', // Height of zoom viewport
        overflow: 'hidden',
        position: 'absolute',
      };
    }
  }
},
computed: {
  imageStyles() {
    return {
      transformOrigin: `${this.mouseX}% ${this.mouseY}%`, // Use percentage-based transform origin
      transform: 'scale(2)',
      transition: 'transform 0.5s ease',
    };
  }
}
,  
  mounted() {  
      document.addEventListener('keydown', (e) => {  
          if (e.key === 'Escape' && this.$store.state.fullImage !== null)   
              this.$store.state.fullImage = null;  
      });  
  }  
}  
</script>  

<style scoped>  
.image-container {  
  position: relative; /* Maintain positioning context for the zoom viewport */  
}  

.zoom-viewport {  
  pointer-events: none; /* Prevent mouse events on zoom viewport */  
}  

.zoomed-image {  
  transition: transform 0.5s ease; /* Smooth transition for zoom */  
}  

</style>