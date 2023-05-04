<template>
<div class="details-page" v-for="(item,index) in details" :key="index">
  <button>Back</button>
  <div class="details-page__image">
    <img :src="item.flags.png">
  </div>
  <div class="details-page__info">
    <h3 class="details-page__info__title">{{item.name.common}}</h3>
    <div class="details-page__info__content">
      <div class="details-page__info__first-col">
        <div>
          <label>Native Name: </label>
          <span>{{item.name.common}}</span>
        </div>
        <div>
          <label>Population: </label>
          <span>{{item.population}}</span>
        </div>
        <div>
          <label>Region: </label>
          <span>{{item.region}}</span>
        </div>
        <div>
          <label>Sub Region: </label>
          <span>{{item.subregion}}</span>
        </div>
        <div>
          <label>Capital: </label>
          <span v-for="(item,index) in item.capital" :key="index">{{item}}</span>
        </div>
      </div>
      <div class="details-page__info__second-col">
        <div>
          <label>Top Level Domain: </label>
          <span>{{item.tld[0]}}</span>
        </div>
        <div>
          <label>Currencies: </label>
          <span v-for="(item,index) in item.currencies" :key="index">{{item.name}}</span>
        </div>
        <div>
          <label>Languages: </label>
          <span v-for="(item,index) in item.languages" :key="index">{{item.name}},</span>
        </div>
      </div>
    </div>
    <div class="details-page__info__borders">
      <label>Border Countries</label>
      <button v-for="(item,index) in item.borders" 
              :key="index" 
              :value="item" 
              @click="openBorderCounrty">{{item}}</button>
      
    </div>

  </div>

</div>
</template>

<script>
import { getByName,getByCode } from '../services/countries'

export default {
    name: 'DetailsPage',
    data(){
        return{
          details: null,
          name: this.$attrs.name,
        }
    },
    methods:{
      async getDetails(){
          this.details = await getByName(this.name)
                          .then((res)=>{
                              return res.data
                          })
                          .catch(err => {
                              return err})
      },
      async getBorder(code){
          this.details = await getByCode(code)
                          .then((res)=>{
                              this.name = res.data[0].name.common
                              this.$router.push(`/details/${this.name}`)
                              return res.data
                          })
                          .catch(err => {
                              return err})
      },
      openBorderCounrty(e){
        let code = e.target.value
        this.getBorder(code)

      },
    },
    mounted(){
       this.getDetails()
    }


}
</script>

