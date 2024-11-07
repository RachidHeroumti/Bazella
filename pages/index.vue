<template>
  <div>
    <sections-banner v-if="$settings.sections.banner.active"></sections-banner>
    <sections-counter></sections-counter>
    <sections-collections v-if="$settings.sections.collections.active"></sections-collections>
    <sections-two-collections v-if="$settings.sections.collection_section_2.active"></sections-two-collections>
    <sections-last-collections v-if="$settings.sections.collection_section_3.active"></sections-last-collections>
   
    <sections-upsell-offers ></sections-upsell-offers>
  
    <template v-for="i in 5">
      <sections-products :key="i" :data-key="i" v-if="$settings.sections[`products_${i}`].active" :section="$settings.sections[`products_${i}`]"></sections-products>
    </template>
    <sections-one-post></sections-one-post>
    <sections-posts v-if="$settings.sections.posts.active"></sections-posts>

    <sections-map></sections-map>
    <div class="container">
      <si-app-loader  placement="BEFORE_HOME_FOOTER"/>
    </div>
  </div>
</template>

<script>
export default {
  async fetch(){
    this.$store.state.seo.title = this.$settings.store_name;
    this.$store.state.seo.description = this.$settings.store_description;
  },
  mounted() {
    this.$tools.call('PAGE_VIEW');
    this.$storeino.fbpx('PageView')
  },
}
</script>
