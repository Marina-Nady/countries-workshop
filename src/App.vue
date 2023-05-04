<template>
  <header-component></header-component>
  <router-view ></router-view>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/styling/main.scss'
import HeaderComponent from './components/Header.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,

  }
}
</script>

