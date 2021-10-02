<template>
  <section class="login">
    <h1>Teste Vaitel</h1>
    <form>
      <label for="email">Email address</label>
      <input type="email" name="email" id="email" v-model="form.email">
      <span class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
          </span>
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="form.password">
      <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
      <button class="btn" @click.prevent="login">Login</button>
    </form>
  </section>
</template>

<script>
import User from "../apis/User";


export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      errors: []
    };
  },
  methods: {
    login() {
      User.login(this.form)
          .then(() => {
            this.$root.$emit("login", true);
            localStorage.setItem("auth", "true");
            this.$router.push({name: "Dashboard"});
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            }
          });
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 900px;
  margin: 0 600px;
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
</style>
