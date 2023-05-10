<template>
    <div class="generic-card" >
        <router-link :to="{ name: 'details', 
                            params: {
                                      name: data.name.common
                                    },
        }">
            <div class="generic-card__image-container">
                <div class="generic-card__image">
                    <img :src="data.flags.png">
                </div>
            </div>
            <div class="generic-card__content">
                <h3 class="generic-card__content__title">{{data.name.common}}</h3>
                <p class="generic-card__content__details">
                    <span class="generic-card__content__details__label">Population:</span>
                    <span> {{data.population}}</span>
                </p>
                <p class="generic-card__content__details">
                    <span class="generic-card__content__details__label">Region:</span>
                    <span> {{data.region}}</span>
                </p>
                <p class="generic-card__content__details">
                    <span class="generic-card__content__details__label">Capital:</span>
                    <span> {{data.capital ? data.capital[0] : 'Not Exist'}}</span>
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'GenericCard',
    props:['data'],

}
</script>

