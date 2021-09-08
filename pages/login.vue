<template>
  <div>
    <h1>Login</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  created () {
    const userData = {
      email: 'roldandvg@gmail.com',
      password: '12345678'
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
        console.log('Success')
      })
      .catch((error) => {
        console.log(error)
        console.log('Error')
      })
  }
}
</script>
