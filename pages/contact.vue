<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "nicholas.weiner@icloud.com",
          url: "mailto:nicholas.weiner@icloud.com",
          icon: "mail",
        },
        {
          id: 2,
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/nick-weiner-995972106/",
          icon: "linkedin",
        },
        {
          id: 3,
          name: "Twitter",
          url: "https://www.twitter.com/signaltwelve",
          icon: "twitter"
        },
        {
          id: 4,
          name: "Instagram",
          url: "https://www.instagram.com/nicholas_weiner/",
          icon: "instagram"
        }
      ],
      locations: [
        {
          id: 1,
          name: "Louisville, Kentucky",
          icon: "map-pin"
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" :locations="locations" />
  </div>
</template>
