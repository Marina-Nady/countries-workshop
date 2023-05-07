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
    <div id="observer"></div>
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
            filteredCountries: [],
            startCard: 0,
            endCard: 8,
            bottom: false,
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
            this.filteredCountries = this.allCountries.slice(this.startCard, this.endCard)
        },
        loadMore(){
            this.startCard += 8
            this.endCard += 8
            let newItems = this.allCountries.slice(this.startCard, this.endCard)
            this.filteredCountries = this.filteredCountries.concat(newItems)

        },
        bottomVisible() {
            const scrollY = window.scrollY;
            const visible = document.documentElement.clientHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const bottomOfPage = visible + scrollY >= pageHeight;
            return bottomOfPage || pageHeight < visible;
        },
    },
    watch: {
        bottom(bottom) {
            if (bottom) {
                this.loadMore();
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', () => {
            this.bottom = this.bottomVisible()
        });
        this.getCountries()
        this.startCard = 0
        this.endCard = 8

    }


}
</script>
