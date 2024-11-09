<template>
    <div class="container py-[10px]  md:py-[20px]  bg-white font-poppins ">
        <div v-if="loading" class="flex items-center justify-center my-5">
            <si-loader></si-loader>
        </div>
        <div v-if="item" class="">
            <h1 class="m-2 font-tenor-sans text-[20px] md:text-[36px] text-center ">{{ item.title }}</h1>
            <hr class="m-0">
            <!-- <div class="relative p-2 m-2 bg-fixed bg-center bg-cover border-4 border-white shadow h-80" 
            :style="`background-image:url('${item.image ? item.image.url : null }')`"></div> -->
            <div class=" w-full "> 
                <nuxt-img
                class=" w-full object-cover "
                :src="item.image ? item.image.url : null"
                alt="post-pic"
                ></nuxt-img>
            </div>
            <p class="m-2 text-center"><small>{{ item.excerpt }}</small></p>
            
            <div  v-if="item" class="p-2 mx-2 my-3 bg-white rounded-md description text-center flex justify-center " id="description" v-html="item.content"></div>


            <div class="flex items-center">
               
                <!-- <h3 class="p-2  whitespace-nowrap text-13.6px font-poppins text-center w-full ">{{ $settings.sections.post.share_buttons.title }}</h3> -->
               
            </div>
            <div class="flex justify-center ">
                <div
                v-for="item in socialMedia.filter(
                  (s) => $settings.sections.product.share_buttons[s.name]
                )"
                :key="item.name"
                class="flex items-center justify-center  m-2"
              >
            
                <a
                  class="flex h-full"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <si-image
                    class="w-5 h-5"
                    width="20"
                    height="20"
                    :src="item.image"
                    :alt="item.name"
                  />
                </a>
                <span class=" text-12px text-center ps-1 pe-3 ">{{ item.name }}</span>
              </div>
            </div>
        </div>
        <hr>

        <div v-if="item" class="related">
            <sections-related-posts :item="item"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
            item: null,
            socialMedia: [
            {
                    name: 'whatsapp',
                    url: 'https://api.whatsapp.com/send?text={title}%20{url}',
                    image: 'https://www.svgrepo.com/show/510342/whatsapp.svg'
                },
                {
                    name: 'facebook',
                    image: 'https://www.svgrepo.com/show/506656/facebook.svg',
                    url: 'https://www.facebook.com/sharer.php?u={url}'
                },
                {
                    name: 'twitter',
                    url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
                    image: 'https://seeklogo.com/images/T/twitter-x-logo-19D2657BAA-seeklogo.com.png'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
                    image: 'https://www.svgrepo.com/show/447138/linkedin-fill.svg'
                }
            ]
        }
    },
    async fetch(){
        try{
            const { slug } = this.$route.params;
            const { data } = await this.$storeino.pages.get({ slug, type: 'POST' })
            this.item = data;

            this.$store.state.seo.title = this.item.title + ' - ' + this.$settings.store_name;
            this.$store.state.seo.description = this.item.excerpt || this.$settings.store_description;
            if(this.item.image){ this.$store.state.seo.image = this.item.image.url; }


            let url = `https://${this.$store.state.domain}/posts/${slug}`;
            for (const button of this.socialMedia) {
                button.url = button.url.replace(/\{title\}/gi, this.item.title).replace(/\{url\}/gi, url);
            }
            this.loading = false;
        }catch(e){
            console.log({e});
            this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
            this.$sentry.captureException(e);
        }
    },
    mounted() {
      this.$storeino.fbpx('PageView')
    }
}
</script>
