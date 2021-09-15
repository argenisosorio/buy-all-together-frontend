<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      token: []
    }
  },
  head: {
    title: 'Log out'
  },
  mounted () {
    if (localStorage.token) {
      this.token = localStorage.token
      // alert(this.token)
    }
    const userData = {
      store: 'true'
    }
    const header = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Content-Language': 'en',
        Authorization: 'Bearer ' + this.token
      }
    }
    axios.post('https://admin.buyalltogether.tk/api/v1/logout', userData, header)
      .then((response) => {
        if (localStorage.token) {
          localStorage.removeItem('token')
          alert('Good bye')
          location.href = '/'
        } else {
          alert('No token exists')
        }
      })
      .catch((error) => {
        console.log(error)
        // alert('Access denied')
        if (localStorage.token) {
          localStorage.removeItem('token')
          alert('Good bye')
          location.href = '/'
        } else {
          // alert('No token exists')
          location.href = '/'
        }
      })
  }
}
</script>
