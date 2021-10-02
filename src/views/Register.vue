<template>
  <section class="register">
    <h1>Register</h1>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="form.name">
        <div class="text-danger" v-if="errors.name">
            {{ errors.name[0] }}
          </div>
        <label for="email">Email address</label>
        <input type="email" name="email" id="email" v-model="form.email">
        <div class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
          </div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="form.password">
        <div class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </div>
        <label for="password_confirmation">Confirm Password</label>
        <input type="password" name="password_confirmation" id="password_confirmation"
               v-model="form.password_confirmation">
        <div class="text-danger" v-if="errors.password_confirmation">
            {{ errors.password_confirmation[0] }}
          </div>
        <button type="submit" @click.prevent="register" class="btn"> Register</button>
      </div>
    </form>
  </section>
</template>

<script>
import User from "../apis/User";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: []
    };
  },
  methods: {
    register() {
      User.register(this.form)
          .then(() => {
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
</style>