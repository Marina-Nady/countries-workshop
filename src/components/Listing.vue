
<template>
  <div class="listing">
    <generic-card v-for="(country,index) in countries" 
                  :key="index"
                  :data="country"></generic-card>
  </div>
</template>

<script>
import GenericCard from './Card.vue'
export default {
    name:'ListingComponent',
    props:['countries'],
    components:{
      GenericCard
    },
    mounted(){

    }
}
</script>

