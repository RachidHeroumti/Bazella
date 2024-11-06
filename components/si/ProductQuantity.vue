<template>
    <div class="flex w-[80px] text-13.6px font-medium font-poppins text-gray-900 border border-gray-400 justify-between ">
        <button @click="inc(-1)" class="bg-gray-50 w-full py-[6px]  " :class="value > quantity.min ? 'bg-white hover:bg-gray-100 ' : ''">-</button>
        <div class="flex w-full  py-[6px] justify-center">
            <label class="relative   h-full">
                <span class="  text-center ">{{ value }}</span>
                <input :min="quantity.min" :max="quantity.max" class=" text-center absolute outline-none inset-0 bg-opacity-0 w-full h-full" v-model="value" type="number">
            </label>
            <span class="flex items-center bg-white   " v-if="quantity.unit">{{ quantity.unit }}</span>
        </div>
        <button @click="inc(1)" class="bg-gray-50  w-full py-[6px] " :class="value < quantity.instock ? 'bg-white hover:bg-gray-100 ' : ''">+</button>
    </div>
</template>

<script>
export default {
    props: {
        quantity: Object,
    },
    data() {
        return {
            value: this.quantity.value || this.quantity.default || 1
        }
    },
    watch:{
        value(val){
            if(val > this.quantity.instock) this.value = this.quantity.instock;
            if(val < this.quantity.min) this.value = this.quantity.default;
            if(isNaN(val)) this.value = this.quantity.default;
            this.$emit('selected', this.value);
        }
    },
    methods: {
        inc(inc){
            this.value = Number(this.value) + (Number(this.quantity.increment) * Number(inc))
        }
    },
}
</script>
