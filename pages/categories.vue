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
                    <h1>Categories</h1>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Icon</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(categorie, index) in categories" v-bind:key="index">
                          <td>{{ categorie.name }}</td>
                          <td>
                            <img v-bind:src="categorie.icon" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
      categories: [],
      campo_select: ''
    }
  },
  head: {
    title: 'Categories'
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
    axios.get('https://admin.buyalltogether.tk/api/v1/list/categories', userData, header)
      .then((response) => {
        this.categories = response.data.data
        console.log(this.categories)
        console.log('done')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
