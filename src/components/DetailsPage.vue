<template>
<div class="details-page" v-for="(item,index) in details" :key="index">
  <div class="details-page__back-btn">
  <router-link to="/">
    <button>
      <span class="icon-left-arrow-long details-page__back-btn__btn-icon"></span>
      <span class="details-page__back-btn__btn-text">Back</span>
    </button>
  </router-link>
  </div>
  <div class="details-page__content">
    <div class="details-page__image-container">
      <div class="details-page__image">
        <img :src="item.flags.svg">
      </div>
    </div>
    <div class="details-page__info">
      <h3 class="details-page__info__title">{{item.name.common}}</h3>
      <div class="details-page__info__content">
        <div class="details-page__info__first-col">
          <div class="details-page__info__row">
            <label class="details-page__info__label">Native Name: </label>
            <span>{{item.name.common}}</span>
          </div>
          <div class="details-page__info__row">
            <label class="details-page__info__label">Population: </label>
            <span>{{item.population}}</span>
          </div>
          <div class="details-page__info__row">
            <label class="details-page__info__label">Region: </label>
            <span>{{item.region}}</span>
          </div>
          <div class="details-page__info__row">
            <label class="details-page__info__label">Sub Region: </label>
            <span>{{item.subregion}}</span>
          </div>
          <div class="details-page__info__row">
            <label class="details-page__info__label">Capital: </label>
            <span v-for="(item,index) in item.capital" :key="index">{{item}}</span>
          </div>
        </div>
        <div class="details-page__info__second-col">
          <div class="details-page__info__row">
            <label class="details-page__info__label">Top Level Domain: </label>
            <span>{{item.tld[0]}}</span>
          </div>
          <div class="details-page__info__row">
            <label class="details-page__info__label">Currencies: </label>
            <span v-for="(item,index) in item.currencies" :key="index">{{item.name}}</span>
          </div>
          <div class="details-page__info__row">
            <label class="details-page__info__label">Languages: </label>
            <span v-for="(item,index) in item.languages" :key="index">{{item}}<span>,</span></span>
          </div>
        </div>
      </div>
      <div class="details-page__info__borders details-page__info__row">
        <label class="details-page__info__label">Border Countries:</label>
        <button v-for="(item,index) in item.borders" 
                :key="index" 
                :value="item" 
                @click="openBorderCountry">{{item}}</button>
        
      </div>

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
          borders: null
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
      openBorderCountry(e){
        let code = e.target.value
        this.getBorder(code)

      },
    },
    mounted(){
       this.getDetails()

    },



}
</script>

