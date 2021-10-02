<template>
  <header>
    <div class="page__section">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol class="breadcrumb__list r-list">
          <li class="breadcrumb__group">
            <router-link class="breadcrumb__point r-link" :to="{ name: 'Dashboard' }">dashboard</router-link>
          </li>
          >
          <li class="breadcrumb__group">
            <router-link class="breadcrumb__point r-link" id="customer_id"
                         :to="{ name: 'Customer',  params: { id: customer_id }}">Customer
            </router-link>
          </li>
          >
          <li class="breadcrumb__group">
            <span class="breadcrumb__point r-link" aria-current="page">Number</span>
          </li>
        </ol>
      </nav>
    </div>
    <div class="container">
      <!-- Via multiple directive modifiers -->
      <h1>Number</h1>
      <!-- Elements to collapse -->

      <label for="name">Number</label>
      <input type="text" name="name" id="name" v-model="number.number">
      <div class="text-danger" v-if="errors.number">
        {{ errors.name[0] }}
      </div>


      <label for="status">Status</label>
      <select v-model="number.status" name="status" id="status">
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="cancelled">Cancelled</option>
      </select>
      <button type="submit" @click.prevent="update" class="btn">Update</button>
      <div v-if="success">
        Success
      </div>
    </div>
    <div class="container">
      <b-button v-b-toggle.create-number>Create a number preference</b-button>
      <b-collapse id="create-number">
        <create-number-preference :id_number="this.customer_id" :id_customer="id"
                                  @numberPreferenceCreated="numberPreferenceCreated"/>
      </b-collapse>
    </div>
    <div class="container">
      <div v-if="number_preferences && number_preferences.length">
        <table id="customers">
          <tr>
            <th>Preferences</th>
            <th>Value</th>
            <th>Edit</th>
          </tr>
          <tr v-for="(preferences,index) in number_preferences" v-bind:key="index">
            <td>
              <input type="text" name="name" id="preferences_name" v-model="preferences.name"></td>
            <td><input type="text" name="name" id="value" v-model="preferences.value"></td>
            <td>
              <button class="btn" @click.prevent="updateNumberPreference(preferences.id,index)">Update
              </button>
              <button class="btn-delete" @click.prevent="destroy(preferences.id)">Delete</button>
            </td>
          </tr>
        </table>
      </div>
      <div v-else-if="number_preferences && number_preferences.length === 0" key="Not founded">
        <p class="sem-resultados">Numbers not found.</p>
      </div>
      <Loading v-else/>
    </div>
  </header>
</template>

<script>

import User from "../apis/User";
import CreateNumberPreference from "@/components/CreateNumberPreference";

export default {
  props: ['customer_id', 'id'],
  components: {
    CreateNumberPreference
  },
  data() {
    return {
      number: {
        id: null,
        number: null,
        status: null,
      },
      number_preferences: {
        name: null,
        value: null,
        id: null,
      },
      success: false,
      errors: [],
      disabled: true,
    }
  },
  methods: {
    getNumber() {
      User.getNumber(this.customer_id, this.id).then(response => {
        this.number = response.data.data
      });
    },
    getNumberPreferences() {
      User.getNumberPreferences(this.customer_id, this.id).then(response => {
        this.number_preferences = response.data.data.reverse()
      });
    },
    update() {
      User.editNumber(this.customer_id, this.id, this.number).then(() => {
        this.success = true
        this.getCustomer()
        this.errors = []

      }).catch(error => {
        this.errors = error.response.data.errors
      });
    },
    destroy(id) {
      User.destroyNumberPreference(this.customer_id, this.id, id).then(() => {
        this.getNumberPreferences()
      })
    },
    numberPreferenceCreated() {
      this.getNumberPreferences()
    },
    updateNumberPreference(id, index) {
      console.log(this.number_preferences[index])
      let form = {
        id: this.number_preferences[index].id,
        name: this.number_preferences[index].name,
        value: this.number_preferences[index].value,
      }
      console.log(form)

      User.editNumberPreference(this.customer_id, this.id, id, form).then(() => {
      })
    },
  },
  mounted() {
    this.getNumber()
    this.getNumberPreferences()
  }
}
</script>

<style scoped>


</style>
