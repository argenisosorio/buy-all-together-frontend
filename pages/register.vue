<template>
  <div class="container">
    <h1>Register</h1>
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
      name: 'pepe el puertass',
      email: 'pepepuertass@mail.com',
      password: '12345678',
      password_confirmation: '12345678',
      phone: '(424) 712 9198',
      country_id: '2',
      profile_type_id: '4',
      store_name: 'prueba4',
      branches: '1',
      category_id: '1',
      country_store_id: '2',
      store_phone: '(424) 712 9198'
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
</script>
