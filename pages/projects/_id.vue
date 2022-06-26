<script>
import feather from "feather-icons";
export default {
  scrollToTop: true,
  data: () => {
    return {
      // To-Do
    };
  },
  computed: {
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
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
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
      <!-- Project heading and meta info -->
      <div>
        <p
          class="
            font-general-medium
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-14
            sm:mt-20
            mb-7
          "
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div 
            v-if="project.publishDate"
            class="flex items-center mr-10">
            <i
              data-feather="clock"
              class="
                w-4 
                h-4 
                text-ternary-dark 
                dark:text-ternary-light
              "
            ></i>
            <span
              class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.publishDate }}</span
            >
          </div>
          <div
             v-if="!(project.publishDate)"
             class="flex items-center mr-10">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.tag }}</span
            >
          </div>
          <div
            v-if="project.publishDate"
            class="flex items-center">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-12 ">
        <div
          class="mb-4 sm:mb-0 max-w-sm"
          v-for="projectImage in project.projectImages"
          :key="projectImage.id"
        >
          <img
            :src="projectImage.img"
            class="rounded-xl shadow-lg sm:shadow-none"
          />
        </div>

          <!-- Project info -->
        <div class="block ml-4">
          <!-- Single project left section details -->
          <div class="w-full text-left">
            <!-- Single project objectives -->
            <div 
              v-if="project.ObjectivesTitle"
              class="mb-7">
              <p
                class="
                  font-general-medium
                  text-2xl text-ternary-dark
                  dark:text-ternary-light
                  mb-2
                "
              >
                {{ project.objectivesTitle }}
              </p>
              <p
                class="
                  mt-4
                  sm:mt-0
                  font-general-regular
                  text-primary-dark
                  dark:text-ternary-light
                "
              >
                {{ project.objectivesDetails }}
              </p>
            </div>

            <!-- Single project technologies -->
            <div class="mb-7">
              <div v-if="project.objectivesTitle">
                <p
                  class="
                    font-general-medium
                    text-2xl text-ternary-dark
                    dark:text-ternary-light
                    mb-2
                  "
                >
                  {{ project.techTitle }}
                </p>
                <p
                  class="
                    font-general-regular
                    text-primary-dark
                    dark:text-ternary-light
                    mb-4
                  "
                >
                  {{ project.technologies.join(", ") }}
                </p>
              </div>
              <p
                class="
                  font-general-medium
                  text-2xl text-ternary-dark
                  dark:text-ternary-light
                  mb-2
                "
              >
                {{ project.linkTitle }}
              </p>
              <ul class="
                font-general-regular
                text-primary-dark
                dark:text-primary-light
                mt-4">
                <li class="flex" v-for="link in project.links" :key="link.id">
                  <i
                    v-if="link.icon"
                    :data-feather="link.icon"
                    class="w-4 text-gray-500 dark:text-gray-400 mr-4"
                  ></i>
                  <a 
                    v-if="link.download"
                    :href="link.download"
                    download=""
                    class="
                      text-lg 
                      mb-4 
                      text-ternary-dark 
                      dark:text-ternary-light"
                    :class="
                      'hover:underline cursor-pointer'
                    "
                  >Download</a>
                  <a
                    :href="link.url"
                    target="_blank"
                    class="
                      text-lg 
                      mb-4 
                      text-ternary-dark 
                      dark:text-ternary-light"
                    :class="
                      'hover:underline cursor-pointer'
                    "
                    aria-label="Website"
                  >
                    {{ link.urlText.join(", ") }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>

  </div>
</template>

<style lang="scss" scoped></style>
