<template>
  <div>
    <a href="/login" >
      Log in
    </a>
    |
    <a href="/logout">
      Log out
    </a>
    <ul>
      <div v-if="authenticated">
        <li v-for="(show, index) in tvshows" v-bind:key="index">
          {{ show.name }} ({{ show.seasons }} temporadas)
        </li>
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
      authenticated: '',
      tvshows: [
        { name: 'Serie 1', seasons: 3 },
        { name: 'Serie 2', seasons: 5 },
        { name: 'Serie 3', seasons: 2 }
      ]
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
