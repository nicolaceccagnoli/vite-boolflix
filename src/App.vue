<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store';

export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },

    methods: {
        getApiCall() {
            axios
            .get(this.store.baseFilmUrl, {
                params: {
                    query: this.store.searchFilm.length > 0 ? this.store.searchFilm : null
                }
            }) 
            .then((response) => {
                console.log('ARRAY DEI FILM: ',response.data.results);
                this.store.films.push(response.data.results);
                console.log(this.store.films[1]);
            });
            axios
            .get(this.store.baseTvSeriesUrl, {
                params: {
                    query: this.store.searchFilm.length > 0 ? this.store.searchFilm : null
                }
            })
            .then((response) => {
                console.log('ARRAY DELLE SERIE: ', response.data.results);
            });

            this.store.searchFilm = '';
        }
    },
    created() {
        this.getApiCall();
    }
}
</script>

<template>
    <AppHeader @performSearch="getApiCall()" />

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
</style>
