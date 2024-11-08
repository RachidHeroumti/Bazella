<template>
    <div class="container">
        <div class=" py-75px my-2 bg-white ">
            <div class=" mb-[50px] flex flex-col justify-center items-center "> 
                <h2 class="mb-2  text-36px  text-black uppercase w-full text-center font-tenor-sans ">{{$settings.sections.cart.title}}</h2>
                <div v-if="!loading.cart && items.length == 0" class="flex flex-col items-center py-1">
                <h2 class="w-full py-3 text-center text-black font-poppins  text-12px">{{ $settings.sections.cart.empty_text }}</h2>
            </div>
                <nuxt-link to="/shop" class="relative group text-16px text-black justify-center flex">  
  <span class="text-13.6px overflow-hidden whitespace-nowrap overflow-ellipsis font-poppins">{{ $settings.sections.cart.buttons.back_to_shop_text }}</span>  
  <span class="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>  
</nuxt-link>
            </div>
           
            <div v-if="loading.cart" class="flex items-center justify-center my-5">
                <si-loader></si-loader>
            </div>
        
          <div class=" w-full flex flex-col md:flex-row sm:gap-5 md:gap-[50px]  "> 
            <div class="flex flex-col cart-items p-2 md:w-2/3 w-full">
                <si-cart-item v-for="(item,i) in items" @remove="remove" :item="item" :key="i" />
            </div>
            <div class=" md:w-1/3 w-full font-poppins"> 
                <div v-if="!loading.cart && items.length > 0" class="flex flex-col mb-2 bg-gray-100  p-[5px] sm:p-[10px] md:p-[30px] ">
                <div class="flex justify-between mb-5 text-13.6px  ">
                    <h2>{{ $settings.sections.cart.total_text }}</h2>
                    <h2 class="">{{ total }} {{ $store.state.currency.symbol }}</h2>
                </div>
                <div class="flex justify-between w-full">
                  
                    <a href="/checkout2" class="flex items-center bg-black justify-center w-full uppercase  text-16px 
                     p-2 text-white whitespace-nowrap ">
                        <span class="w-full text-center overflow-hidden whitespace-nowrap overflow-ellipsis">{{ $settings.sections.cart.buttons.checkout_text }}</span>
                    </a>
                </div>
            </div>
            </div>
           
          </div>
            

           
        </div>


        <div class="flex flex-col mb-2 bg-white" v-if="!loading.cart && items.length > 0">
            <div class="m-2" v-if="upsells.length > 0">
                <h2 class="text-2xl">{{ $settings.sections.cart.upsell.title }}</h2>
            </div>
            <div v-if="loading.upsells" class="flex items-center justify-center my-5">
                <si-loader></si-loader>
            </div>
            <div class="flex flex-wrap" v-if="upsells.length > 0">
                <template v-for="(upsell, i) in upsells">
                    <div v-for="(product, ii) in upsell.products" :key="ii+'_'+i" class="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <si-product :item="product" :upsell="upsell"></si-product>
                    </div>
                </template>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: { cart: true, upsells: true },
            items: [],
            total: 0,
            upsells: []
        }
    },
    async fetch(){
        this.$store.state.seo.title = this.$settings.sections.cart.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.cart.description || this.$settings.store_description;
        await this.initCart();
        if(this.items.length > 0){
            await this.getUpsells();
        }
    },
    mounted() {
      this.$storeino.fbpx('PageView')
    },
    watch: {
        async "$store.state.cart.length"(){
            await this.initCart();
            await this.getUpsells();
        },
        items: {
            deep: true,
            handler(){
                this.calcTotal();
            }
        }
    },
    methods: {
        async getUpsells(){
            const ids = this.$store.state.cart.map(item => item._id);
            this.loading.upsells = true;
            if(ids.length > 0){
                try{
                    const response = await this.$storeino.upsells.search({ 'with': ['products'],'product._id-in': ids, limit: 1000 });
                    if(response.data.results)
                    this.upsells = response.data.results;
                }catch(e){
                    console.log({e});
                }
            }
            this.loading.upsells = false;
        },
        async initCart(){
            this.items = [];
            const ids = this.$store.state.cart.map(item => item._id);
            this.loading.cart = true;
            if(ids.length > 0){
                try{
                    const response = await this.$storeino.products.search({ '_id-in': ids, limit: 1000 });
                    
                    const products = response.data.results;
                    for (const item of this.$store.state.cart) {
                        const cartItem = {};
                        const product = products.find(p => p._id === item._id);
                        cartItem._id = product._id;
                        cartItem.slug = product.slug;
                        cartItem.name = product.name;
                        cartItem.price = product.price.salePrice;
                        cartItem.quantity = product.quantity;
                        cartItem.quantity.value = item.quantity;
                        cartItem.image = product.images.length > 0 ? product.images[0].src : '';
                        if(item.variant && item.variant._id){
                            cartItem.variant = product.variants.find(variant => variant._id === item.variant._id);
                            cartItem.price = cartItem.variant.price.salePrice;
                        }
                        if(item.upsell){
                            cartItem.upsell = item.upsell;
                            const discount = cartItem.upsell.type == 'percentage' ? cartItem.price * (cartItem.upsell.value / 100) : cartItem.upsell.value
                            cartItem.price = cartItem.price - discount;
                        }
                        cartItem.total = cartItem.price * cartItem.quantity.value;
                        this.items.push(cartItem);
                    }
                    this.calcTotal();
                }catch(e){
                    console.log({e});
                }
            }
            this.loading.cart = false;
        },
        async remove(item){
            this.$tools.call('REMOVE_FROM_CART', item);
        },
        calcTotal(){
            this.total = this.items.reduce((total, item) => total + (item.price * item.quantity.value), 0);
        }
    },
}
</script>
