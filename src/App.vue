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

                // Creo un ciclo per ogni singolo oggetto FIlm all'interno dell'oggetto principale
                for (let i = 0; i < response.data.results.length; i++) {

                    this.store.films.push(response.data.results[i]);
                    console.log('ARRAY DEI FILM: ', this.store.films);

                }
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

                for (let i = 0; i < response.data.results.length; i++) {
                    this.store.tvSeries.push(response.data.results[i]);
                    console.log('ARRAY DELLE SERIE: ', this.store.tvSeries);
                }

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
