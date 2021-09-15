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
                    <h1>Log out</h1>
                      <form method="post">
                        <div>
                          <button
                            type="submit"
                            @click.prevent="logout()"
                            class="btn btn-block btn-sm btn-primary transition-3d-hover">
                            Log out
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
export default {
  data () {
    return {
      token: []
    }
  },
  head: {
    title: 'Log out'
  },
  methods: {
    logout () {
      if (localStorage.token) {
        localStorage.removeItem('token')
        alert('Good bye')
        location.href = '/'
      } else {
        alert('No token exists')
      }
    }
  }
}
</script>
