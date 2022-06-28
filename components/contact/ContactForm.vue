<script>
import Button from "../reusable/Button.vue";
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
          minLength: minLength( 5 )
        },
        message: {
          required,
          minLength: minLength ( 4 )
        },
		},
  },
  methods: {
    submitForm() {
      let contactFormData = new FormData();
      contactFormData.set( 'name', this.form.name );
      contactFormData.set( 'subject', this.form.subject );
      contactFormData.set( 'email', this.form.email );
      contactFormData.set( 'message', this.form.message );
      console.log( 'submitting data...' );
      axios( {
        method: 'post',
        url: 'https://reqres.in/api/users',
        data: contactFormData
      } ).then( function ( response ) {
        // Handle success.
        
        console.log( response );
      } ).catch( function ( response ) {
        // Handle error.
        
        console.log( response );
      } );
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
      <form class="font-general-regular space-y-7">
      <!-- Name Label and Input -->
        <p v-bind:class="{ 'block': $v.form.name.$error }">
          <label 
            class="
            block 
            text-lg 
            text-primary-dark 
            dark:text-primary-light 
            mb-2
          " 
            for="name"
          >Full Name
          </label>
          <input 
            type="text" 
            v-model.trim="form.name"
            @input="$v.form.name.$touch()"
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
          <span class="block" v-if="!$v.form.name.required">
            <small>Field is required</small>
          </span>
          <span class="block" v-if="!$v.form.name.minLength">
            <small>Name must have at least {{ $v.form.name.$params.minLength.min }} letters.</small>
          </span>
        </p>
        <!-- Subject Label and Input -->
        <p v-bind:class="{ 'block': $v.form.subject.$error }">
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
            placeholder="Subject"
            aria-label="Subject"
            v-model="form.subject" 
            @input="$v.form.subject.$touch()"
          />
          <span class="block" v-if="!$v.form.subject.required">
            <small>Field is required</small>
          </span>
          <span class="block" v-if="!$v.form.subject.minLength">
            <small>Subject must have at least {{ $v.form.subject.$params.minLength.min }} letters.</small>
          </span>
        </p>
        <!-- Email Label and Input -->
        <p v-bind:class="{ 'block': $v.form.email.$error }">
          <label>E-mail</label>
          <input 
            type="text" 
            v-model="form.email" 
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
          <span class="block" v-if="!$v.form.email.required">
            <small>Field is required</small>
          </span>
          <span class="block" v-if="!$v.form.email.email">
            <small>Please enter valid e-mail address</small>
          </span>
        </p>
        <!-- Message Label and Input -->
        <p v-bind:class="{ 'block': $v.form.message.$error }">
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
          <span class="block" v-if="!$v.form.message.required">
            <small>Field is required</small>
          </span>
          <span class="block" v-if="!$v.form.message.minLength">
            <small>Message must have at least {{ $v.form.message.$params.minLength.min }} letters.</small>
          </span>
        </p>
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
            @click.prevent="submitForm" 
            :disabled="$v.form.$invalid"
          />
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
