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
                    <h1>Register user</h1>
                      <form method="post">
                        <div class="form-group">
                          <label class="form-label">Name</label>
                          <input
                            v-model="name"
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Name"
                            aria-label="Name"
                            required
                          >
                        </div>
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
                          <label class="form-label">Profile type</label>
                          <select
                            v-model="profile_type_id"
                            class="form-control"
                            name="profile_type_id">
                            <option value="" selected>Select</option>
                            <option
                              v-for="(x, index) in profile_types"
                              :key="index"
                              :value="x.id"
                            >
                              {{ x.name }}
                            </option>
                          </select>
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
                        <div class="form-group">
                          <label class="form-label">Password confirmation</label>
                          <input
                            v-model="password_confirmation"
                            type="password"
                            class="form-control"
                            name="password confirmation"
                            placeholder="Password confirmation"
                            aria-label="Password confirmation"
                            required
                          >
                        </div>
                        <div class="form-group">
                          <label class="form-label">Phone</label>
                          <input
                            v-model="phone"
                            type="text"
                            class="form-control"
                            name="phone"
                            placeholder="Phone"
                            aria-label="Phone"
                            required
                          >
                        </div>
                        <div class="form-group">
                          <label class="form-label">Country</label>
                          <select v-model="country_id" class="form-control" name="country_id">
                            <option value="" selected>Select</option>
                            <option
                              v-for="(x, index) in countries"
                              :key="index"
                              :value="x.id"
                            >
                              {{ x.name }}
                            </option>
                          </select>
                        </div>
                        <h2>Store</h2>
                        <div v-if="profile_type_id === 4">
                          <div class="form-group">
                            <label class="form-label">Store name</label>
                            <input
                              v-model="store_name"
                              type="text"
                              class="form-control"
                              name="store_name"
                              placeholder="Store name"
                              aria-label="Store name"
                              required
                            >
                          </div>
                        </div>
                        <div v-else />
                        <div v-if="profile_type_id === 4">
                          <div class="form-group">
                            <label class="form-label">Branches</label>
                            <input
                              v-model="branches"
                              type="number"
                              class="form-control"
                              name="branches"
                              placeholder="Branches"
                              aria-label="Branches"
                              required
                            >
                          </div>
                        </div>
                        <div v-else />
                        <div v-if="profile_type_id === 4">
                          <div class="form-group">
                            <label class="form-label">Category id</label>
                            <input
                              v-model="category_id"
                              type="text"
                              class="form-control"
                              name="Category id"
                              placeholder="Category id"
                              aria-label="Category id"
                              required
                            >
                          </div>
                        </div>
                        <div v-else />
                        <div v-if="profile_type_id === 4">
                          <div class="form-group">
                            <label class="form-label">Country store</label>
                            <select v-model="country_store_id" class="form-control" name="country_store_id">
                              <option value="" selected>Select</option>
                              <option
                                v-for="(x, index) in countries"
                                :key="index"
                                :value="x.id"
                              >
                                {{ x.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div v-else />
                        <div class="form-group">
                          <label class="form-label">Store phone</label>
                          <input
                            v-model="store_phone"
                            type="text"
                            class="form-control"
                            name="Store phones"
                            placeholder="Store phone"
                            aria-label="Store phone"
                            required
                          >
                        </div>
                        <div>
                          <button
                            type="submit"
                            @click.prevent="register()"
                            class="btn btn-block btn-sm btn-primary transition-3d-hover">
                            Register
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
      profile_types: [],
      countries: [],
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      country_id: '',
      profile_type_id: '',
      store_name: '',
      branches: '',
      category_id: '',
      country_store_id: '',
      store_phone: ''
    }
  },
  head: {
    title: 'Register'
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
        this.profile_types = response.data.data
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('https://admin.buyalltogether.tk/api/v1/list/countries', userData, header)
      .then((response) => {
        this.countries = response.data.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    register () {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        phone: this.phone,
        country_id: this.country_id,
        profile_type_id: this.profile_type_id,
        store_name: this.store_name,
        branches: this.branches,
        category_id: this.category_id,
        country_store_id: this.country_store_id,
        store_phone: this.store_phone
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
          // console.log(response)
          alert('Success')
        })
        .catch((error) => {
          console.log(error)
          alert('Error')
        })
    }
  }
}
</script>
