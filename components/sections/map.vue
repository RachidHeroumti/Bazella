<template>
  <div v-if="$settings.sections.map.active"
  class=" w-full container "> 
    <div class="w-full "
    v-html="mapIframe"></div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      // Replace this with your actual data source that passes the full iframe string
      mapIframe: this.$settings.sections.map.text || '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110098.45733841938!2d-9.577744599999999!3d30.419747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad1cc9%3A0xbcf8d0b78bf48474!2sAgadir%2080000!5e0!3m2!1sen!2sma!4v1731315173746!5m2!1sen!2sma" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    };
  }
};
</script>
