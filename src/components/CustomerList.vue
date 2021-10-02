<template>
  <section class="container" style="margin-top: 20px">
    <div v-if="customers && customers.length"  @created-customer="getCustomers">
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
          <td><a>Edit</a></td>
        </tr>
      </table>
    </div>
    <div v-else-if="customers && customers.length === 0" key="Not founded">
      <p class="sem-resultados">customers not found.</p>
    </div>
    <Loading v-else/>
  </section>
</template>
<script>

import User from "../apis/User";

export default {
  data() {
    return {
      fields: ['name', 'document', 'status'],
      customers: null,
    };
  },
  methods: {
    getCustomers() {
      User.auth().then(response => {
        this.customers = response.data.data
      });
    },
    customerCreate()
    {
      console.log('oi');
    }
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
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
