<template>
<div class="bg-white py-16">
    <si-app-loader placement="BEFORE_FOOTER"/>
    <div class="container ">
        <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5 text-12px text-black font-normal  mb-16px px-40px">
           
            <div class="">
              
              <div v-if="$settings.sections.footer.pages_menu" class=" ">
                <div v-for="(item,i) in $settings.sections.footer.pages_menu.items" :key="i" >
                  <router-link class="p-2 m-1 w-full flex" :to="item.url">{{ item.text }}</router-link>
                </div>
              </div>
          </div>
            <div class="">
              
                <div v-if="$settings.sections.footer.pages_menu" class=" ">
                  <div v-for="(item,i) in $settings.sections.footer.pages_menu.items" :key="i" >
                    <router-link class="p-2 m-1 w-full flex" :to="item.url">{{ item.text }}</router-link>
                  </div>
                </div>
            </div>

            <div class="">
              <div v-if="$settings.sections.footer.menu_seasons" class=" ">
                <div v-for="(item,i) in $settings.sections.footer.menu_seasons.items" :key="i" >
                    <router-link class="p-2 m-1 w-full flex " :to="item.url">{{ item.text }}</router-link>
                </div>
              </div>
          </div>
            <div class=" gap-3">
                <div class=" " v-html="$settings.sections.footer.about"></div>
                <div class="   h-full">
                    <div  v-if="socialMedia"
                    class="flex flex-wrap ">
                        <div v-for="item in socialMedia.filter(s=>$settings.sections.footer.social_media[s.name])" :key="item.name" class=" ml-3 mt-5 flex items-center justify-between">
                            <a class="h-full flex" :href="$settings.sections.footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                                <si-image class="h-5 w-5" width="25" height="25" :src="item.image" :alt="item.name"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="flex flex-wrap p-2 justify-center items-center w-full">
                        <div v-for="item in methods.filter(m=>$settings.sections.footer.methods[m.name])" :key="item.name" class="w-20 h-12 mx-2 flex items-center justify-center border p-2">
                            <si-image width="80" height="40" :src="item.image" :alt="item.name" class="h-full object-contain"/>
                        </div>
                    </div>
    </div>
    <si-app-loader placement="AFTER_FOOTER"/>
</div>
</template>
<script>
export default {
    data() {
        return {
            methods: [
                {
                    name: 'visa',
                    image: 'https://storeno.b-cdn.net/themes/palest/visa.png'
                },
                {
                    name: 'mastercard',
                    image: 'https://storeno.b-cdn.net/themes/palest/mastercard.png'
                },
                {
                    name: 'transfer',
                    image: 'https://storeno.b-cdn.net/themes/palest/transfer.png'
                },
                {
                    name: 'cash',
                    image: 'https://storeno.b-cdn.net/themes/palest/cod.png'
                }
            ],
            socialMedia: [
                {
                    name: 'facebook',
                    image: 'https://www.svgrepo.com/show/508815/facebook.svg'
                },
              
                {
                    name: 'instagram',
                    image: 'https://www.svgrepo.com/show/521711/instagram.svg'
                },
                {
                    name: 'snapchat',
                    image: 'https://www.svgrepo.com/show/510208/snapchat.svg'
                },
                {
                    name: 'tiktok',
                    image: 'https://www.svgrepo.com/show/333611/tiktok.svg'
                }
            ]
        }
    },
}
</script>
