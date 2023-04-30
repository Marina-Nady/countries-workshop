<template>
    <header-component></header-component>
    <HomePage></HomePage>
    <!-- <details-page></details-page> -->

</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/styling/main.scss'
import HeaderComponent from './components/Header.vue'
import HomePage from './components/Home.vue'
// import DetailsPage from './components/DetailsPage.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomePage,
    // DetailsPage
  }
}
</script>

