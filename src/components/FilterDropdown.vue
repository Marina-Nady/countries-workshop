<template>
    <div class="filter-dropdown">
        <div class="dropdown">
            <button class="btn dropdown-toggle filter-dropdown__select" type="button" 
                    id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false">
                {{region || regions[0] }}
                <span class="icon-arrow-down-sign-to-navigate"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <a class="dropdown-item" href="#" v-for="(region,index) in regions" 
                            :key="index"
                            :disabled="index == 0"
                            :class="index == 0 ? 'disable' : ''"
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
                'Filter by Region',
                'Africa',
                'Americas',
                'Asia',
                'Europe',
                'Oceania'
            ],
            region: ''
        }
    },
    methods:{
        getVal(val){
            this.region = val
            this.$emit('getVal',val)
        }


    }

}
</script>
