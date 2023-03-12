<template>
    <div class="filter-dropdown">
        <div class="dropdown">
            <button class="btn dropdown-toggle filter-dropdown__select" type="button" 
                    id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false">
                Filter by Region
                <span class="icon-arrow-down-sign-to-navigate"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <a class="dropdown-item" href="#" v-for="(region,index) in regions" 
                            :key="index"
                            @click.prevent="getVal(region)">{{region}}</a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    name: 'FilterDropdown',
    data(){
        return{
            regions:[
                'Africa',
                'America',
                'Asia',
                'Europe',
                'Oceania'
            ]
        }
    },
    methods:{
        getVal(val){
            this.$emit('getVal',val)
        }


    }

}
</script>
