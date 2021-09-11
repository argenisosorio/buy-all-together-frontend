<template>
  <div class="container">
    <h1>Countries</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      countries: []
    }
  },
  head: {
    title: 'Countries'
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
    axios.get('https://admin.buyalltogether.tk/api/v1/list/countries', userData, header)
      .then((response) => {
        this.countries = response.data.data
        console.log(this.countries)
      })
      .catch((error) => {
        alert(error)
      })
  }
}
</script>
