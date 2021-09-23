<template>
  <div>
    <a href="/login">
      Log in
    </a>
    |
    <a href="/logout">
      Log out
    </a>
    <ul>
      <div v-if="authenticated">
        Authenticated
      </div>
      <div v-else>
        Not authenticated
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      authenticated: ''
    }
  },
  head: {
    title: 'Test'
  },
  mounted () {
    if (localStorage.token) {
      this.authenticated = true
    } else {
      this.authenticated = false
    }
  }
}
</script>
