<template>
  <header>
    <nav>
      <div>
        <router-link class="btn" to="/" v-if="!isLoggedIn">Login</router-link>
      </div>
      <div>
        <router-link class="btn spacing" to="/register" v-if="!isLoggedIn">Register</router-link>
      </div>
      <div>
        <a
            class="btn spacing"
            v-if="isLoggedIn"
            @click.prevent="logout"
            href="#"
        >Logout</a
        >
      </div>
    </nav>
  </header>
</template>

<script>
import User from "../apis/User";

export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  mounted() {
    this.$root.$on("login", () => {
      this.isLoggedIn = true;
    });

    this.isLoggedIn = !!localStorage.getItem("auth");
  },

  methods: {
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("auth");
        this.isLoggedIn = false;
        this.$router.push({name: "Home"});
      });
    }
  }
};
</script>

<style scoped>

header {
  background-color: #04AA6D;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  float: right;
}

.spacing {
  margin-left: 30px;
}

</style>
