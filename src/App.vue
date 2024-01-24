<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
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
    },

    methods: {
        getApiCall() {
            // Richiamo l'API per cercare i film
            axios
            .get(this.store.baseFilmUrl, {
                // Passo i valori che voglio dare ai parametri dell'Api
                params: {
                    query: this.store.searchFilm.length > 0 ? this.store.searchFilm : null
                }
            }) 
            .then((response) => {
                console.log('ARRAY DEI FILM: ',response.data.results);
                this.store.films.push(response.data.results);
                console.log(this.store.films[1]);
            });
            // Richiamo l'API per cercare le Serie TV
            axios
            .get(this.store.baseTvSeriesUrl, {
                // Passo i valori che voglio dare ai parametri dell'Api
                params: {
                    query: this.store.searchFilm.length > 0 ? this.store.searchFilm : null
                }
            })
            .then((response) => {
                console.log('ARRAY DELLE SERIE: ', response.data.results);
            });

            // Svuola la variabile ogni volta che ho richiamato l'API
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
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
</style>
