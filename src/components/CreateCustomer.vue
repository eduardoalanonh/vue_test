<template>
  <div class="container">
    <h1>Create a new customer</h1>
    <div class="card">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="form.name">
      <div class="text-danger" v-if="errors.name">
            {{ errors.name[0] }}
          </div>
      <label for="document">Document</label>
      <input type="text" name="document" id="document" v-model="form.document" maxlength="12">
      <div class="text-danger" v-if="errors.document">
            {{ errors.document[0] }}
          </div>
      <button type="submit" @click.prevent="create" class="btn"> Create</button>

    </div>
  </div>
</template>
<script>

import User from "../apis/User";

export default {
  emits: ['CustomerCreated'],

  data() {
    return {
      form: {
        name: null,
        document: null,
      },
      errors: []
    };
  },
  methods: {
    create() {
      User.storeCustomer(this.form)
          .then(() => {
            this.errors = []
            this.form.name = ''
            this.form.document = ''
            this.$emit('CustomerCreated')
          })
          .catch(error => {
            this.errors = error.response.data.errors
          });
    },
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