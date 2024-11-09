<template>
  <div class="container md:mt-20 mt-10" v-if="items.length > 0">
    <div class="  md:mb-10 mb-4">
      <h2 class="md:text-2xl text-[20px]">{{ $settings.sections.post.related.title }}</h2>
    </div>
    <div class="flex justify-center text-13.6px" v-if="$settings.sections.posts.show_more_text">
      <nuxt-link class=" px-4 w-full mx-2 bg-white  flex justify-end" to="/blog">
        <span class=" px-2 rounded p-1 border">{{ $settings.sections.posts.show_more_text }}</span>
         </nuxt-link>
    </div>
    <div v-if="loading" class="flex justify-center items-center my-5">
      <si-loader></si-loader>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <si-post :item="item"></si-post>
      </div>
    </div>
 
  </div>
</template>
<script>
export default {
  props:{
      item: Object
  },
  data() {
    return {
      loading: true,
      items: [],
    };
  },
  async fetch(){
      try{
          const ids = this.item.categories.map(c=>c._id);
          const { data } = await this.$storeino.pages.search({
              "_id-ne": this.item._id,
              "categories._id-in": ids
            })
            if(data.results)
          this.items = data.results
      }catch(e){
        console.log({e});
        this.$sentry.captureException(e);
      }
      this.loading = false;
  }
};
</script>