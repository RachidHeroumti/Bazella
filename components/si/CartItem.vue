<template>
    <div>
        <div class="flex w-full flex-wrap relative mb-2 p-2 font-poppins text-gray-900 font-light">
            <div class="flex w-full justify-between " > 
                <div class="flex items-center w-full  h-[150px] sm:h-[200px]" >
                    <nuxt-link class=" flex h-full " :to="`/products/${item.slug}`">
                        <si-image class=" w-[100px]  object-contain sm:w-[150px] h-[150px] sm:h-[200px]" :src="item.image" :alt="item.name"/>
                    </nuxt-link>
                    <div class=" px-5px md:px-10px h-full"> 
                        <div class="flex flex-col   h-full ">
                            <div class=" h-full flex flex-col ">
                                <nuxt-link class=" text-16px    mb-2" :to="`/products/${item.slug}`">{{ item.name }}</nuxt-link>
                            <nuxt-link class="" :to="`/products/${item.slug}`"><span v-if="item.variant">{{ item.variant.name }}</span></nuxt-link>
                            
                            </div>
                            <div class=" h-full ">
                                <si-product-quantity @selected="quantitySelected" :quantity="item.quantity"/>
                            <div v-if="item.upsell">
                                <b class="bg-red-700 text-white inline-block p-1 rounded-lg">-{{ item.upsell.value }} {{ item.upsell.type == 'percentage' ? '%' : $store.state.currency.symbol }}</b>
                            </div>

                            <span class="  mt-10px  cursor-pointer text-13.6px " @click="remove">Remove</span>
                            </div>
                          
                            
                        </div>
                    </div>

                </div> 
                <div class=" h-full flex justify-center items-center w-[50px]"> 
                  <span class=" text-16px font-twentieth-century">{{ item.price }} {{ $store.state.currency.symbol }}</span>
                </div>
            </div>

            <!-- <div class="flex flex-col justify-center w-1/3 md:w-1/4 bg-gray-100 md:bg-white p-2 relative">
                <div class="text-gray-600">
                    <b class="text-xl">{{ item.quantity.value }} x</b>  
                </div>
                <h2 class="text-2xl text-red-700">{{ item.total }} {{ $store.state.currency.symbol }}</h2>
            </div> -->


           
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: { type: Object, required: true },
        quantity: { type: Number, default: 1 }
    },
    async fetch(){
        this.quantitySelected(this.item.quantity.value);
    },
    methods: {
        remove(){
            this.$emit("remove", this.item);
        },
        quantitySelected(quantity){
            this.item.quantity.value = quantity;
            this.item.total = this.item.price * quantity;
            let item = null;
            if(this.item.variant) item = this.$store.state.cart.find(i => i._id == this.item._id && this.item && i.variant._id == this.item.variant._id);
            else item = this.$store.state.cart.find(i => i._id == this.item._id && this.item && !i.variant);
            this.$tools.call('ADD_TO_CART', { ...item, quantity: quantity });
        }
    },
}
</script>