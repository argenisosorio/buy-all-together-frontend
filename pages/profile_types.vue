<template>
  <div class="container">
    <h1>Profile types</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      tipos: []
    }
  },
  head: {
    title: 'Profile types'
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
        console.log(response)
      })
      .catch((error) => {
        alert(error)
      })
  }
}
</script>
