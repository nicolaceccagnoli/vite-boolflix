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
            
            if (this.store.searchFilm.trim()) {
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

                        // Assegno la risposta dell'API all'Array dei films
                        this.store.films = response.data.results;

                        // Allo stesso tempo Assegno la risposta dell'API all'Array temporaneo dei films
                        this.store.tempFilmArray = response.data.results;


                    console.log(this.store.films);

                })
                .catch((error) => {
                    this.store.films = [];
                })
                .finally(() => {
                    console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
                })
                ;
                // Richiamo l'API per cercare le Serie TV
                axios
                .get(this.store.baseTvSeriesUrl, {
                    // Passo i valori che voglio dare ai parametri dell'Api
                    params: {
                        query: this.store.searchFilm.length > 0 ? this.store.searchFilm : null,
                    }
                })
                .then((response) => {
                    console.log('ARRAY DELLE SERIE: ', response.data.results);

                        // Assegno la risposta dell'API all'Array delle Serie TV
                        this.store.tvSeries = response.data.results;

                        // Assegno la risposta dell'API all'Array temporaneo delle Serie TV
                        this.store.tempTvArray = response.data.results;

                    console.log(this.store.tvSeries);
                })
                .catch((error) => {
                    this.store.tvSeries = [];
                })
                .finally(() => {
                    console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
                });

                // Svuola la variabile ogni volta che ho richiamato l'API
                this.store.searchFilm = '';

                // Svuoto l'array dei film ogni volta che richiamo l'API
                this.store.films = [];

                // Svuoto l'array delle Serie TV ogni volta che richiamo l'API
                this.store.tvSeries = [];

                // Svuoto l'array dei Film in trend ogni volta che richiamo l'API
                this.store.trendsTv = [];

                // Svuoto l'array delle Serie TV in trend ogni volta che richiamo l'API
                this.store.trendsFilm = [];

            }

            },

        trendApiCall() {
            // Richiamo l'API per cercare i trend dei Film
            axios
            .get(this.store.baseTrendFilmUrl)
            .then((response) => {
                console.log(response.data.results);
                for (let i = 0; i < response.data.results.length; i++) {
                    // Creo un ciclo per ogni singolo oggetto Trend all'interno dell'oggetto principale
                    this.store.trendsFilm = response.data.results;
                }
                console.log('Questi sono i trend: ', this.store.trends);

            })
            .catch((error) => {
                this.store.trendsFilm = [];
            })
            .finally(() => {
                console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
            });

            // Richiamo l'API per cercare i trend delle Serie TV
            axios
            .get(this.store.baseTrendTvUrl)
            .then((response) => {
                console.log(response.data.results);
                for (let i = 0; i < response.data.results.length; i++) {
                    // Creo un ciclo per ogni singolo oggetto Trend all'interno dell'oggetto principale
                    this.store.trendsTv = response.data.results;
                }
                console.log('Questi sono i trend: ', this.store.trends);

            })
            .catch((error) => {
                this.store.trendsTv = [];
            })
            .finally(() => {
                console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
            });
            
        },
    },
    created() {
        // Richiamo le Funzioni per le API dopo che l'istanza del componente è stata create
        this.getApiCall();
        this.trendApiCall();
    }
}
</script>

<template>
    <AppHeader @performSearch="getApiCall()"/>

    <AppMain />
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
</style>
