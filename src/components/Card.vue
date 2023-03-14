<template>
    <div class="generic-card">
        <div class="generic-card__image-container">
            <div class="generic-card__image">
                <img :src="data.flags.png">
            </div>
        </div>
        <h3>{{data.name.common}}</h3>
        <p>Population: {{data.population}}</p>
        <p>Region: {{data.region}}</p>
        <p>Capital: {{data.capital ? data.capital[0] : 'Not Exist'}}</p>

    </div>
</template>

<script>
export default {
    name:'GenericCard',
    props:['data']

}
</script>

