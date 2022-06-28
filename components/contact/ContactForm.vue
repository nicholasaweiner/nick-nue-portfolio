<script>
import Button from "../reusable/Button.vue"
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  components: { 
    Button,

  },
  data: () => {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },
  validations: {
    form: {
				name: {
					required,
					minLength: minLength( 4 )
				},
				email: {
          required,
          email
        },
        subject: {
          required,
          minLength: minLength( 4 )
        },
        message: {
          required,
          minLength: minLength ( 4 )
        },
		},
  },
  methods: {
    onSubmit() {
          let data = {
            name: this.form.name,
            email: this.form.email,
            subject: this.form.subject,
            message: this.form.message
          };
          this.$axios
            .post("https://getform.io/f/https://getform.io/f/0c6790a5-fc37-4cf4-a889-461c353d2bf4", { data })
            .then(response => console.log(response))
            .catch(error => console.log(error))
        },
    },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-secondary-dark
        rounded-xl
        shadow-xl
        text-left
      "
    >
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        "
      >
        Contact Form
      </p>
  <!-- Alternate Contact form -->
      <form class="font-general-regular space-y-7" @submit="onSubmit" accept-charset="UTF-8" action="https://getform.io/f/0c6790a5-fc37-4cf4-a889-461c353d2bf4" method="POST">
      <!-- Name Label and Input -->
        <div v-bind:class="{ 'block': $v.form.name.$error }">
          <label 
            class="
            block 
            text-lg 
            text-primary-dark 
            dark:text-primary-light 
            mb-2
          " 
            for="name"
          >Name
          </label>
          <input 
            type="text" 
            v-model.trim="form.name"
            @input="$v.form.name.$touch()"
            name="name"
            class="
             w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            ">
          <div v-if="$v.form.name.$dirty">
            <span class="block" v-if="!$v.form.name.required">
              <small>Field is required</small>
            </span>
            <span class="block" v-if="!$v.form.name.minLength">
              <small>Name must have at least {{ $v.form.name.$params.minLength.min }} letters.</small>
            </span>
          </div>
        </div>
        <!-- Subject Label and Input -->
        <div v-bind:class="{ 'block': $v.form.subject.$error }">
          <label
              class="block text-lg text-primary-dark dark:text-primary-light mb-2"
              for="subject">Subject
          </label>
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="subject"
            name="subject"
            type="text"
            required=""
            aria-label="Subject"
            v-model="form.subject" 
            @input="$v.form.subject.$touch()"
          />
          <div v-if="$v.form.subject.$dirty">
            <span class="block" v-if="!$v.form.subject.required">
              <small>Field is required</small>
            </span>
            <span class="block" v-if="!$v.form.subject.minLength">
              <small>Subject must have at least {{ $v.form.subject.$params.minLength.min }} letters.</small>
            </span>
          </div>
        </div>
        <!-- Email Label and Input -->
        <div v-bind:class="{ 'block': $v.form.email.$error }">
          <label
            class="
              block 
              text-lg 
              text-primary-dark 
              dark:text-primary-light 
              mb-2
            "
            for="
              email
            ">E-mail
          </label>
          <input 
            type="text" 
            v-model="form.email" 
            name="email"
            @input="$v.form.email.$touch()"
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
              ">
          <div v-if="$v.form.email.$dirty">
            <span class="block" v-if="!$v.form.email.required">
              <small>Field is required</small>
            </span>
            <span class="block" v-if="!$v.form.email.email">
              <small>Please enter valid e-mail address</small>
            </span>
          </div>
        </div>
        <!-- Message Label and Input -->
        <div v-bind:class="{ 'block': $v.form.message.$error }">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message">
            Message
          </label>
          <textarea
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="message"
            name="message"
            cols="14"
            rows="6"
            v-model="form.message" 
            @input="$v.form.message.$touch()"
            aria-label="Message"
            placeholder="Type Message Here">
          </textarea>
          <div v-if="$v.form.message.$dirty">
            <span class="block" v-if="!$v.form.message.required">
              <small>Field is required</small>
            </span>
            <span class="block" v-if="!$v.form.message.minLength">
              <small>Message must have at least {{ $v.form.message.$params.minLength.min }} letters.</small>
            </span>
          </div>
        </div>
        <!-- Submit Button -->
        <p>
          <Button
            title="Send Message"
            class="
              px-4
              py-2.5
              text-white
              tracking-wider
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-1 focus:ring-indigo-900
              rounded-lg
              duration-500
            "
            type="submit"
            aria-label="Send Message"
            :disabled="$v.form.$invalid"
          />
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
