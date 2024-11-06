<template>
<div class="mx-1">
    <div class="flex justify-between m-1">
        <span>{{ min }}</span>
        <span>{{ max }}</span>
    </div>
    <div class="flex items-center px-2 h-1 bg-gray-200 rounded-md relative range mx-2">
        <div class="absolute top-0 range-width h-1" :style="`left:${minVal*100/max}%;width:${(maxVal-minVal)*100/max}%`"></div>
        <input class="min w-full h-1 absolute top-0 left-0 appearance-none bg-transparent" type="range" v-model="minVal" :min="min" :max="max" @change="setParams($event, 'price.salePrice-from')">
        <input class="max w-full h-1 absolute top-0 left-0 appearance-none bg-transparent" type="range" v-model="maxVal" :min="min" :max="max" @change="setParams($event, 'price.salePrice-to')">
    </div>

</div>
</template>
<script>
export default {
    props:{
        min: { type: Number, default: 0 },
        max: { type: Number, default: 0 }
    },
    watch: {
        minVal: function(val) {
            if(Number(val) > Number(this.maxVal)) {
                this.minVal = this.maxVal;
            }
        },
        maxVal: function(val) {
            if(Number(val) < Number(this.minVal)) {
                this.maxVal = this.minVal;
            }
        }
    },
    data() {
        return {
            minVal: this.min,
            maxVal: this.max
        }
    },
    methods: {
        setParams(event, key) {
            this.$emit('change', event, key);
        }
    },
}
</script>
<style>
.range input::-webkit-slider-thumb{
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
    background: black;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.2);
}
.range input.min::-webkit-slider-thumb{
    right: 3px;
}
.range input.max::-webkit-slider-thumb{
    left: 3px;
}
.range .range-width{
    background-color: black;
}
</style>