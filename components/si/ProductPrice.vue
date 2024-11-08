<template>
    <div class="w-auto md:w-full text-16px md:text-[20px]">
        <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
        <div class="price flex justify-center md:justify-start my-2 space-x-2 me-2 text-black font-tenor-sans" v-if="type=='simple'">
            <span class=" w-full text-center">{{ price.salePrice }}{{ $store.state.currency.symbol }}</span>
            <span class="flex "></span>
            <span class="relative" v-if="price.comparePrice > 0">
                <b class=""><del>{{ price.comparePrice }}{{ $store.state.currency.symbol }}</del>
                    </b>
            </span>
            <meta itemprop="price" :content="price.salePrice" />
        </div>
        <div class="price flex justify-center my-2 px-2   " v-else-if="minPrice != maxPrice">
            <meta itemprop="price" :content="minPrice" />
            <span class=" ">{{ minPrice }}{{ $store.state.currency.symbol }}</span>
            <span class="flex">~</span>
            <b class=" ">{{ maxPrice }}{{ $store.state.currency.symbol }}</b>
        </div>
        <div class="price flex justify-center my-2 px-2  " v-else-if="variants.length > 0">
            <meta itemprop="price" :content="variants[0].price.salePrice" />
            <span class=" ">{{ variants[0].price.salePrice }}{{ $store.state.currency.symbol }}</span>
            <span class="flex w-2"></span>
            <span class="relative" v-if="variants[0].price.comparePrice > 0">
                <b class="">
                    <del>{{ variants[0].price.comparePrice }}{{ $store.state.currency.symbol }}</del></b>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: String,
        price: Object,
        originalPrice: { type: Object, default: null },
        variants: { type: Array, default: [] }
    },
    data() {
        return {
            minPrice : this.type == 'variable' ? Math.min(...this.variants.map(v=>v.price.salePrice)) : 0,
            maxPrice : this.type == 'variable' ? Math.max(...this.variants.map(v=>v.price.salePrice)) : 0,
        }
    },
}
</script>
<style>
.compare-price{
    height: 0.2em;
    transform: rotate(-12deg);
    opacity: .5;
}
</style>