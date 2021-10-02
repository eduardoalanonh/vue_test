<template>
  <div class="container">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="form.name">
    <label for="name">Value</label>
    <input type="text" name="name" id="value" v-model="form.value">
    <button type="submit" @click.prevent="create" class="btn"> Create</button>
    <span class="text-danger" v-if="errors.number">
            {{ errors.number[0] }}
          </span>
  </div>

</template>
<script>

import User from "../apis/User";

export default {
  emits: ['numberPreferenceCreated'],
  props: ['id_number', 'id_customer'],

  data() {
    return {
      form: {
        name: null,
        value: null,
      },
      errors: []
    };
  },
  methods: {
    create() {
      User.storeNumberPreference(this.id_number, this.id_customer, this.form)
          .then(() => {
            this.errors = null
            this.form.name = ''
            this.form.value = ''
            this.$emit('numberPreferenceCreated')
          })
          .catch(error => {
            this.errors = error.response.data.errors
          });
    },
  },
};
</script>
