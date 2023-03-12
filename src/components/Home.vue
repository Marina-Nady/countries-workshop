<template>
    <div class="home-page">
        <header-component></header-component>
        <div class="home-page__search-bar">
            <search-input @getText="getSearchVal"></search-input>
            <filter-dropdown @getVal="getFilterVal"></filter-dropdown>
        </div>
        <listing-component></listing-component>
    </div>
</template>

<script>
import HeaderComponent from './Header.vue'
import ListingComponent from './Listing.vue'
import FilterDropdown from './FilterDropdown.vue'
import SearchInput from './SearchInput.vue'
export default {
    name: 'HomePage',
    components: {
        HeaderComponent,
        ListingComponent,
        FilterDropdown,
        SearchInput
    },
    data(){
        return{
            searchVal: '',
            filterVal: ''
        }
    },
    methods:{
        getSearchVal(text){
            this.searchVal = text
        },
        getFilterVal(val){
            this.filterVal = val
        }
    }

}
</script>
