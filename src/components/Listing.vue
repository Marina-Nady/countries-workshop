
<template>
  <div class="listing">
    <generic-card v-for="(country,index) in countries" 
                  :key="index"
                  :data="country"
                  @getObj="getName"></generic-card>
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
    methods:{
      getName(name){
        console.log(name)

      }

    },
    mounted(){

    }
}
</script>

