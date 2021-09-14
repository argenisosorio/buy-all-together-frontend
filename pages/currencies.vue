<template>
  <div class="container">
    <h1>Currencies</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  head: {
    title: 'Currencies'
  },
  mounted () {
    if (localStorage.token) {
      this.token = localStorage.token
    }
    const header = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Content-Language': 'en',
        Authorization: 'Bearer ' + this.token
      }
    }
    axios.get('https://admin.buyalltogether.tk/api/v1/list/currencies', header)
      .then((response) => {
        console.log(response)
        alert('Success')
      })
      .catch((error) => {
        console.log(error)
        alert('Access denied')
      })
  }
}
</script>
