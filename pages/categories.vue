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
                    <h1>Categories</h1>
                    <input id="myInput" type="text" onkeyup="searchFunction()" placeholder="Search by categorie...">
                    <table id="myTable" class="table table-striped">
                      <tr>
                        <th scope="col">
                          Category
                        </th>
                        <th scope="col">
                          Name
                        </th>
                        <th scope="col">
                          Description
                        </th>
                        <th scope="col">
                          Icon
                        </th>
                        <th scope="col">
                          Image
                        </th>
                      </tr>
                      <tbody>
                        <tr v-for="(categorie, index) in categories" :key="index">
                          <td>{{ categorie.category.name }}</td>
                          <td>{{ categorie.name }}</td>
                          <td>{{ categorie.description }}</td>
                          <td>
                            <img :src="categorie.icon" width="100px"></img>
                          </td>
                          <td>
                            <img :src="categorie.image" width="100px"></img>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <script>
                      function searchFunction() {
                      var input, filter, table, tr, td, i, txtValue;
                      input = document.getElementById("myInput");
                      filter = input.value.toUpperCase();
                      table = document.getElementById("myTable");
                      tr = table.getElementsByTagName("tr");
                      for (i = 0; i < tr.length; i++) {
                      td = tr[i].getElementsByTagName("td")[0];
                      if (td) {
                      txtValue = td.textContent || td.innerText;
                      if (txtValue.toUpperCase().indexOf(filter) > -1) {
                      tr[i].style.display = "";
                      } else {
                      tr[i].style.display = "none";
                      }
                      }
                      }
                      }
                    </script>
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
    title: 'Categories'
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
    axios.get('https://admin.buyalltogether.tk/api/v1/categories', userData, header)
      .then((response) => {
        console.log(response)
        this.categories = response.data.data.records
        console.log(this.categories)
        console.log('done')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
