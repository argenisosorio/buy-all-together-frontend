<template>
  <div class="container">
    <h1>Register</h1>
    <form method="post">
      <h2>User</h2>
      <div>
        <label class="label">Name</label>
        <input v-model="name" type="text" name="name">
      </div>
      <div>
        <label class="label">Email</label>
        <input v-model="email" type="email" name="email">
      </div>
      <div>
        <label class="label">Profile type</label>
        <select v-model="profile_type_id" name="profile_type_id">
          <option
            v-for="(x, index) in profile_types"
            :key="index"
            :value="x.id"
          >
            {{ x.name }}
          </option>
        </select>
      </div>
      <div>
        <label class="label">Password</label>
        <input v-model="password" type="password" name="password">
      </div>
      <div>
        <label class="label">Password confirmation</label>
        <input v-model="password_confirmation" type="password" name="password_confirmation">
      </div>
      <div>
        <label class="label">Phone</label>
        <input v-model="phone" type="text" name="phone">
      </div>
      <div>
        <label class="label">Country</label>
        <select v-model="country_id" name="country_id">
          <option
            v-for="(x, index) in countries"
            :key="index"
            :value="x.id"
          >
            {{ x.name }}
          </option>
        </select>
      </div>
      <h2>Store</h2>
      <div v-if="profile_type_id === 4">
        <div>
          <label class="label">Store name</label>
          <input v-model="store_name" type="text" name="store_name">
        </div>
      </div>
      <div v-else />
      <div v-if="profile_type_id === 4">
        <div>
          <label class="label">Branches</label>
          <input v-model="branches" type="number" name="branches">
        </div>
      </div>
      <div v-else />
      <div v-if="profile_type_id === 4">
        <div>
          <label class="label">Category id</label>
          <input v-model="category_id" type="text" name="category_id">
        </div>
      </div>
      <div v-else />
      <div v-if="profile_type_id === 4">
        <div>
          <label class="label">Country store</label>
          <select v-model="country_store_id" name="country_store_id">
            <option
              v-for="(x, index) in countries"
              :key="index"
              :value="x.id"
            >
              {{ x.name }}
            </option>
          </select>
        </div>
      </div>
      <div v-else />
      <div>
        <label class="label">Store phone</label>
        <input v-model="store_phone" type="text" name="store_phone">
      </div>
      <div>
        <button type="button" @click.prevent="register()">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      profile_types: [],
      countries: [],
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      country_id: '',
      profile_type_id: '',
      store_name: '',
      branches: '',
      category_id: '',
      country_store_id: '',
      store_phone: ''
    }
  },
  head: {
    title: 'Register'
  },
  created () {
    const userData = {
      store: 'true'
    }
    const header = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Content-Language': 'en'
      }
    }
    axios.post('https://admin.buyalltogether.tk/api/v1/list/profile/types', userData, header)
      .then((response) => {
        this.profile_types = response.data.data
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('https://admin.buyalltogether.tk/api/v1/list/countries', userData, header)
      .then((response) => {
        this.countries = response.data.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    register () {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        phone: this.phone,
        country_id: this.country_id,
        profile_type_id: this.profile_type_id,
        store_name: this.store_name,
        branches: this.branches,
        category_id: this.category_id,
        country_store_id: this.country_store_id,
        store_phone: this.store_phone
      }
      const header = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Content-Language': 'en'
        }
      }
      axios.post('https://admin.buyalltogether.tk/api/v1/register', userData, header)
        .then((response) => {
          // console.log(response)
          alert('Success')
        })
        .catch((error) => {
          console.log(error)
          alert('Error')
        })
    }
  }
}
</script>
