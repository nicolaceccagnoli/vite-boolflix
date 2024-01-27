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

                    // Creo un ciclo per ogni singolo oggetto Film all'interno dell'oggetto principale
                    for (let i = 0; i < response.data.results.length; i++) {
                        this.store.films = response.data.results;
                    }
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

                    // Creo un ciclo per ogni singolo oggetto Serie all'interno dell'oggetto principale
                    for (let i = 0; i < response.data.results.length; i++) {
                        this.store.tvSeries = response.data.results;
                    }
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
        getGenresApiCall() {
            // Richiamo l'API per cercare i generi dei Film
            axios
            .get(this.store.baseGenresFilmUrl)
            .then((response) => {
                console.log('Questa è la chiamata dei GENERI FILM: ',response.data.genres)
                    // Creo un ciclo per ogni singolo oggetto Genere all'interno dell'oggetto principale
                    for (let x = 0; x < response.data.genres.length; x++) {
                    this.store.genresTvAndFilm.push(response.data.genres[x].name);
                }
                console.log('ARRAY DEI GENERI solo con i FILM: ', this.store.genresTvAndFilm);
            })
            .catch((error) => {
                this.store.genresTvAndFilm = [];
            })
            .finally(() => {
                console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
            });

            // Richiamo l'API per cercare i generi delle Serie TV
            axios
            .get(this.store.baseGenresTvUrl)
            .then((response) => {
                console.log('Questa è la chiamata dei GENERI SERIE TV: ',response.data.genres)
                    // Creo un ciclo per ogni singolo oggetto Genere all'interno dell'oggetto principale
                    for (let x = 0; x < response.data.genres.length; x++) {

                        // Applico un controllo per cui se uno dei Generi è già presente nella lista allora non viene pushato
                        if (!this.store.genresTvAndFilm.includes(response.data.genres[x].name)) {
                            this.store.genresTvAndFilm.push(response.data.genres[x].name);
                        }
                    
                }
                console.log('ARRAY DEI GENERI solo con le SERIE TV: ', this.store.genresTvAndFilm);

            })
            .catch((error) => {
                this.store.genresTv = [];
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
