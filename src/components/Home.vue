<template>
    <div class="home-page">
        <div class="home-page__search-bar">
            <search-input @getText="getSearchVal"></search-input>
            <filter-dropdown @getVal="getFilterVal"></filter-dropdown>
        </div>
        <listing-component  v-if="!isLoading" :countries="allCountries"></listing-component>
        <h1 v-if="isLoading">Loading...</h1>
    </div>
</template>

<script>
import ListingComponent from './Listing.vue'
import FilterDropdown from './FilterDropdown.vue'
import SearchInput from './SearchInput.vue'
import { getAll,getByName,getByRegion } from '../services/countries'

export default {
    name: 'HomePage',
    components: {
        ListingComponent,
        FilterDropdown,
        SearchInput
    },
    data(){
        return{
            filterVal: '',
            searchval:'',
            allCountries: [],
            isLoading: false
        }
    },
    methods:{
        getSearchVal(searchVal){
            this.searchval = searchVal
            if(searchVal){
                this.getByName(searchVal)
            }
            else{
                this.getCountries()
            }
        },
        getFilterVal(val){
            this.filterVal = val
            if(this.filterVal){
                this.getByRegion(this.filterVal)
            }else{
                this.getCountries()
            }
        },
        async getCountries(){
            this.isLoading = true
            this.allCountries = await getAll()
                            .then((res)=>{
                                this.isLoading = false
                                return res.data
                            })
                            .catch(err => {
                                this.isLoading = false
                                return err})
        },
        async getByName(country){
            this.isLoading = true
            this.allCountries = await getByName(country)
                .then((res)=>{
                    this.isLoading = false
                    return res.data
                })
                .catch(err => {
                    this.isLoading = false
                    return err})
        },
        async getByRegion(region){
                this.isLoading = true
                this.allCountries = await getByRegion(region)
                .then((res)=>{
                    this.isLoading = false
                    return res.data
                })
                .catch(err => {
                    this.isLoading = false
                    return err})

        }
    },
    mounted(){
       this.getCountries()
    }


}
</script>
