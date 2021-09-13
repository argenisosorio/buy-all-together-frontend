<template>
  <div>
    <Header />
    <main id="content" role="main">
      <!-- Slider Section -->
      <div class="mb-5">
        <div class="bg-img-hero" style="background-image: url(~/assets/img/1920X422/img1.jpg);">
          <div class="container min-height-420 overflow-hidden">
            <div
              class=""
              data-pagi-classes="text-center position-absolute right-0 bottom-0 left-0 justify-content-start mb-3 mb-md-4 offset-xl-3 pl-2 pb-1">
              <div class="js-slide bg-img-hero-center">
                <div class="row min-height-420 py-7 py-md-0">
                  <div class="offset-xl-3 col-xl-4 col-6 mt-md-8">
                    <h1>Log in</h1>
                      <form method="post">
                        <div class="form-group">
                          <label class="form-label">Email</label>
                          <input
                            v-model="email"
                            type="email"
                            class="form-control"
                            name="email"
                            placeholder="Email"
                            aria-label="Email"
                            required
                          >
                        </div>
                        <div class="form-group">
                          <label class="form-label">Password</label>
                          <input
                            v-model="password"
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="Password"
                            aria-label="Password"
                            required
                          >
                        </div>
                        <div>
                          <button
                            type="submit"
                            @click.prevent="login()"
                            class="btn btn-block btn-sm btn-primary transition-3d-hover">
                            Log In
                          </button>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Slider Section -->
    </main>
    <Footer />
    <Aside />
    <GoOnTop />
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
    title: 'Log in'
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
