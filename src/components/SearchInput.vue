<template>
    <div class="search-input">
        <form class="search-input__form">
            <input type="text" class="search-input__text" v-model="searchText"  
                    placeholder="Search for a country...">
            <input type="submit" class="search-input__submit" @click.prevent="getText">
            <span class="icon-magnifying-glass"></span>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SearchInput',
    data(){
        return{
            searchText: ''
        }
    },
    methods:{
        getText(){
            this.$emit('getText',this.searchText)
        }


    }

}
</script>

