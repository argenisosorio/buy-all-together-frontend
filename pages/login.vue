<template>
  <div class="container">
    <h1>Login</h1>
    <form method="post">
      <label class="label">Email</label>
      <div class="control">
        <input v-model="email" type="email" name="email">
      </div>
      <label class="label">Password</label>
      <div class="control">
        <input v-model="password" type="password" name="password">
      </div>
      <div class="control mt-2">
        <button type="button" @click.prevent="login()">
          Log In
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
      email: '',
      password: ''
    }
  },
  head: {
    title: 'Login'
  },
  methods: {
    login () {
      const userData = {
        email: this.email,
        password: this.password
      }
      const header = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Content-Language': 'en'
        }
      }
      axios.post('https://admin.buyalltogether.tk/api/v1/login', userData, header)
        .then((response) => {
          console.log(response)
          alert('Welcome')
        })
        .catch((error) => {
          console.log(error)
          alert('Access denied')
        })
    }
  }
}
</script>
