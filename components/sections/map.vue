<template>
  <iframe
  class=" w-full container"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166128.6672417587!2d-9.598419972288855!3d30.398650474396423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68a18c4c7%3A0x4bc3e6c710a8a933!2sCN%20Tower%2C%20301%20Front%20St%20W%2C%20Toronto%2C%20ON%20M5V%202T6%2C%20Canada!5e0!3m2!1sen!2sma!4v1730135583992!5m2!1sen!2sma"
   
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
  
</template>
  
  <script>
export default {
  computed: {
    mapSrc() {
      // Default coordinates (e.g., lat: 0, lng: 0 for a placeholder)
      const defaultLat = 0;
      const defaultLng = 0;

      const lat = defaultLat;
      const lng = defaultLng;

      return `https://maps.app.goo.gl/LJAaRumoqohFtbFo7`;
    },
  },
};
</script>
  