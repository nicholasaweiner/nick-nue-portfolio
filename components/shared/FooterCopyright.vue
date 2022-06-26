<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      projectName: "Nue Digital Portfolio",
      author: "Nick Weiner",
    };
  },
  computed: {
    ...mapState(["copyrightDate"]),
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      &copy; {{ copyrightDate }} -
      {{ author }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
