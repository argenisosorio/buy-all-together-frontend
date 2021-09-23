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
              data-pagi-classes="text-center position-absolute right-0 bottom-0 left-0 justify-content-start mb-3 mb-md-4 offset-xl-3 pl-2 pb-1"
            >
              <div class="js-slide bg-img-hero-center">
                <div class="row min-height-420 py-7 py-md-0">
                  <div class="col-12">
                    <h1>Products</h1>
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
    <GoOnTop />
    <style type="text/css">
      .col-12 {
      /*border: ridge 1px red;*/
      }
    </style>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      categories: []
    }
  },
  head: {
    title: 'Products'
  },
  mounted () {
    if (localStorage.token) {
      this.token = localStorage.token
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
    axios.get('https://admin.buyalltogether.tk/api/v1/list/products', userData, header)
      .then((response) => {
        console.log(response)
        this.categories = response.data.data.records
        console.log(this.categories)
        console.log('done')
      })
      .catch((error) => {
        console.log(error)
        alert('Acces denied')
      })
  }
}
</script>
