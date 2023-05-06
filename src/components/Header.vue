<template>
    <div class="header">
        <div class="header__title">
            <h3>Where in the world</h3>
        </div>
        <div class="header__dark-mode">
            <button @click="changeTheme">
                <span class="icon-light-mode" v-if="!isDark"></span>
                <span class="icon-dark-mode" v-if="isDark"></span>
                <p>Dark Mode</p>
            </button>
        </div>
    </div>
</template>

<script>
import '../assets/styling/Header.scss';

export default {
    name: 'HeaderComponent',
    data(){
        return{
            theme: null,
            isDark: false
        }
    },
    methods:{
        changeTheme() {
            if(this.theme == 'light'){
                document.documentElement.setAttribute('data-theme', 'dark')
                this.theme = 'dark'
                this.isDark = true
            }else{
                document.documentElement.setAttribute('data-theme', 'light')
                this.theme = 'light'
                this.isDark = false
            }
        }
    },
    mounted(){
        this.theme = document.documentElement.getAttribute("data-theme")
    }

}
</script>
