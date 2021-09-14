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
      // tipos: []
    }
  },
  head: {
    title: 'Currencies'
  },
  mounted () {
    if (localStorage.token) {
      this.token = localStorage.token
      const currentToken = this.token
      console.log(currentToken)
    }
  },
  created () {
    // const tokenn = process.browser.localStorage(token)
    // const currentToken = process.browser.localStorage.getItem('token')
    const header = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Content-Language': 'en',
        'Authorization': 'Bearer ' + this.currentToken
      }
    }
    // axios.get('https://admin.buyalltogether.tk/api/v1/categories', header)
    axios.get('https://admin.buyalltogether.tk/api/v1/list/currencies', header)
    // axios.get('https://admin.buyalltogether.tk/api/v1/list/products', header)
      .then((response) => {
        console.log(response)
        alert('Success')
      })
      .catch((error) => {
        console.log(error)
        // console.log(localStorage.token)
        alert('Access denied')
      })
  }
}
</script>
