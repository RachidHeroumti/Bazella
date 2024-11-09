<template>
   <div class=" container md:mt-20 mt-10 "> 
    <div 
     v-if="$settings.sections.upsellbanner.active"
    class=" w-full grid grid-cols-1 md:grid-cols-2 gap-5"
    > 

    <div
     v-for="(item,i) in items" :key="i"
     class="  flex mx-20px my-10px border-2  border-black p-32px justify-between ">
     <div class=" w-full flex flex-col justify-center items-center">
        <p class=" text-15px font-tenor-sans text-center">{{ item.text }}</p>
        <h1 class=" text-[50px] font-tenor-sans text-center ">{{ item.amount}}%</h1>
     </div>
     <div class=" w-full">
        <nuxt-img class=" h-[150px]" 
        :src="item.image.src" alt="image"> 
        </nuxt-img>
     </div>
    </div>

    </div>
   </div>
    
</template>
<script> 
export default {
    data (){
        return {
            items: this.$settings.sections.upsellbanner.items,
        }
    }
}
</script>

<style>

</style>