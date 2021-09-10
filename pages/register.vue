<template>
  <div class="container">
    <h1>Register</h1>
    <form method="post">
      <div>
        <label class="label">Name</label>
        <input v-model="name" type="text" name="name">
      </div>
      <div>
        <label class="label">Email</label>
        <input v-model="email" type="email" name="email">
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
        <label class="label">Country</label>
        <input v-model="country_id" type="text" name="country_id">
      </div>
      <div>
        <label class="label">Profile type</label>
        <input v-model="profile_type_id" type="text" name="profile_type_id">
      </div>
      <div>
        <label class="label">Store name</label>
        <input v-model="store_name" type="text" name="store_name">
      </div>
      <div>
        <label class="label">Branches</label>
        <input v-model="branches" type="text" name="branches">
      </div>
      <div>
        <label class="label">Category</label>
        <input v-model="category_id" type="text" name="category_id">
      </div>
      <div>
        <label class="label">Country store </label>
        <input v-model="country_store_id" type="text" name="country_store_id">
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
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      country_id: '',
      profile_type_id: '',
      store_name: '',
      branches: '',
      category_id: '',
      country_store_id: ''
    }
  },
  head: {
    title: 'Register'
  },
  methods: {
    register () {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        country_id: this.country_id,
        profile_type_id: this.profile_type_id,
        store_name: this.store_name,
        branches: this.branches,
        category_id: this.category_id,
        country_store_id: this.country_store_id
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
          console.log(response)
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
