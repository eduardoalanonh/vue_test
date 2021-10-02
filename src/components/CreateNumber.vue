<template>
  <div class="container">
    <label for="number">Number</label>
    <input type="text" name="number" id="number" v-model="form.number" maxlength="14">
    <button type="submit" @click.prevent="create" class="btn"> Create</button>
    <span class="text-danger" v-if="errors.number">
            {{ errors.number[0] }}
          </span>
  </div>

</template>
<script>

import User from "../apis/User";

export default {
  emits: ['numberCreated'],
  props: ['id'],

  data() {
    return {
      form: {
        number: null,
      },
      errors: []
    };
  },
  methods: {
    create() {
      User.storeNumber(this.id, this.form)
          .then(() => {
            this.errors = []
            this.form.number = ''
            this.$emit('numberCreated')
          })
          .catch(error => {
            this.errors = error.response.data.errors
          });
    },
  },
  created() {

  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

form,
.register {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-top: 40px;
  color: white;
}

form {
  display: grid;
  color: white;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.error {
  color: red;
}


</style>