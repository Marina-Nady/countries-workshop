<template>
    <div class="generic-card" @click="getName(data.name)">
        <div class="generic-card__image-container">
            <div class="generic-card__image">
                <img :src="data.flags.png">
            </div>
        </div>
        <div class="generic-card__content">
            <h3 class="generic-card__content__title">{{data.name}}</h3>
            <p>Population: {{data.population}}</p>
            <p>Region: {{data.region}}</p>
            <p>Capital: {{data.capital ? data.capital : 'Not Exist'}}</p>
        </div>

    </div>
</template>

<script>
export default {
    name:'GenericCard',
    props:['data'],
    methods:{
        getName(name){
            this.$emit('getName',name)
        }

    }

}
</script>

