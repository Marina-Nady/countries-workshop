<template>
    <div class="home-page">
        <div class="home-page__search-bar">
            <search-input @getText="getSearchVal"></search-input>
            <filter-dropdown @getVal="getFilterVal"></filter-dropdown>
        </div>
        <listing-component  v-if="!isLoading" :countries="filteredCountries"></listing-component>
        <h1 v-if="isLoading">Loading...</h1>
        <h1 v-if="!isLoading && !filteredCountries">No Results</h1>
    </div>
</template>

<script>
import ListingComponent from './Listing.vue'
import FilterDropdown from './FilterDropdown.vue'
import SearchInput from './SearchInput.vue'
import { getAll } from '../services/countries'

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
            isLoading: false,
            filteredCountries: []
        }
    },
    methods:{
        getSearchVal(searchVal){
            if(searchVal){
                this.filteredCountries = this.allCountries.filter((country) => {
                    let name = country.name.common.toLowerCase();
                    let search = searchVal.toLowerCase()
                    return name.includes(search)
                    })
            }
            else{
                this.getCountries()
            }
        },
        getFilterVal(val){
            this.filterVal = val
            if(this.filterVal != 'Filter by Region'){
                this.filteredCountries = this.allCountries.filter((country)=> val == country.region)
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
            this.filteredCountries = this.allCountries
        },
    },
    mounted(){
       this.getCountries()
    }


}
</script>
