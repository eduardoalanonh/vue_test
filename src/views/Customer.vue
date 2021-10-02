<template>
  <header>
    <div class="page__section">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol class="breadcrumb__list r-list">
          <li class="breadcrumb__group">
            <router-link class="breadcrumb__point r-link" :to="{ name: 'Dashboard' }" aria-current="page">dashboard
            </router-link>
          </li>
          >
          <li class="breadcrumb__group">
            <span class="breadcrumb__point r-link" :to="{ name: 'Dashboard' }">Customer</span>
          </li>
        </ol>
      </nav>
    </div>
    <div class="container">
      <!-- Via multiple directive modifiers -->
      <h1>Customer</h1>
      <!-- Elements to collapse -->
      <b-card>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="customer.name">
        <div class="text-danger" v-if="errors.name">
          {{ errors.name[0] }}
        </div>
        <label for="document">Number</label>
        <input type="text" name="document" id="document" v-model="customer.document" maxlength="12">
        <div class="text-danger" v-if="errors.document">
          {{ errors.document[0] }}
        </div>
        <label for="status">Status</label>
        <select v-model="customer.status" name="status" id="status">
          <option value="new">New</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button type="submit" @click.prevent="update" class="btn">Update</button>
      </b-card>
      <div v-if="success">
        Success
      </div>

      <div>
        <b-button v-b-toggle.create-number>Create a number</b-button>
        <b-collapse id="create-number">
          <create-number :id="id" @numberCreated="getNumbers"/>
        </b-collapse>
      </div>
      <div class="container">
        <div v-if="numbers && numbers.length">
          <table id="customers">
            <tr>
              <th>Number</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
            <tr v-for="number in numbers" v-bind:key="number.id">
              <td>{{ number.number }}</td>
              <td>{{ number.status }}</td>
              <td>
                <router-link class="btn" id="number.id" customer="id"
                             :to="{ name: 'Number',  params: {  id: number.id,customer_id: id}}">Edit
                </router-link>
                <button class="btn-delete" @click.prevent="destroy(number.id)">Delete</button>
              </td>
            </tr>
          </table>
        </div>
        <div v-else-if="numbers && numbers.length === 0" key="Not founded">
          <p class="sem-resultados">Numbers not found.</p>
        </div>
        <Loading v-else/>
      </div>
    </div>
  </header>
</template>

<script>
import User from "../apis/User";
import CreateNumber from '@/components/CreateNumber';

export default {
  props: ['id'],
  components: {
    CreateNumber,
  },
  data() {
    return {
      customer: {
        name: null,
        document: null,
        status: null,
      },
      numbers: null,
      errors: [],
      success: false,
    };
  },
  methods: {
    getCustomer() {
      User.getCustomer(this.id).then(response => {
        this.customer = response.data.data
      });
    },
    getNumbers() {
      User.getNumbers(this.id).then(response => {
        this.numbers = response.data.data.reverse()
      });
    },
    update() {
      User.editCustomer(this.id, this.customer).then(() => {
        this.getCustomer()
        this.errors = []
        this.success = true

      }).catch(error => {
        this.errors = error.response.data.errors
      });
    },
    destroy(id) {
      User.destroyNumber(this.id, id).then(() => {
        this.getNumbers()
      })
    },
  },

  mounted() {
    this.getCustomer()
    this.getNumbers()
  }
}
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

</style>
