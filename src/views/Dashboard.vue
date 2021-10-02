<template>
  <header>
  <div class="page__section">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb__list r-list">
      <li class="breadcrumb__group">
        <span class="breadcrumb__point r-link" aria-current="page">dashboard</span>
      </li>
    </ol>
  </nav>
  </div>
  <div class="container">
    <CreateCustomer @CustomerCreated="getCustomers()"/>
    <div v-if="customers && customers.length">
      <table id="customers">
        <tr>
          <th>Customer</th>
          <th>Document</th>
          <th>Status</th>
          <th>Edit</th>
        </tr>
        <tr v-for="customer in customers" v-bind:key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.document }}</td>
          <td>{{ customer.status }}</td>
          <td>
            <router-link class="btn btn-td" :id="customer.id" :to="{ name: 'Customer', params: { id: customer.id } }">
              Edit
            </router-link>
            <button class="btn-delete spacing" @click.prevent="destroy(customer.id)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
    <div v-else-if="customers && customers.length === 0" key="Not founded">
      <p class="sem-resultados">customers not found.</p>
    </div>
    <Loading v-else/>
  </div>
  </header>
</template>

<script>

import CreateCustomer from '@/components/CreateCustomer';
import User from "../apis/User";

export default {
  components: {
    CreateCustomer
  },
  data() {
    return {
      fields: ['name', 'document', 'status'],
      customers: {
        id: null,
        name: null,
        document: null,
        status: null,
      },
    };
  },
  methods: {
    getCustomers() {
      User.getCustomers().then(response => {
        this.customers = response.data.data.reverse()
      })
          .catch(() => {
            localStorage.removeItem("auth");
            this.isLoggedIn = false;
            this.$router.push({name: "Home"});
          });
    },
    destroy(id) {
      User.destroyCustomer(id).then(() => {
        this.getCustomers();
      })
    },
  },
  created() {
    this.getCustomers();
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 50px auto;
}

#customers {
  width: 100%;
}

#customers td, #customers th {

  padding: 8px;
}

#customers tr:hover {
  background-color: #5d7fbf;
}

#customers th {
  font-size: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

td {
  font-size: 20px;
  color: white;
}

.btn {
  display: unset;
}
</style>
