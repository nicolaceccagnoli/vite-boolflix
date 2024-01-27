<script >
import { store } from '../store';
import axios from 'axios';

    export default {
        data() {
            return {
                store,
                // Creo un Array per i Credits
                credits: [],
                // Creo una Flag per i Credits
                showCredits: false
            };
        },
        methods: {
            // Creo una funzione che modifichi la stringa della lingua dei Film e Serie TV 
            langFlagControl() {
                this.film.original_language = this.film.original_language.toUpperCase();

                if (this.film.original_language == 'EN') {
                    this.film.original_language = 'GB';
                }

                if (this.film.original_language == 'JA') {
                    this.film.original_language = 'JP';
                }

                if (this.film.original_language == 'KO') {
                    this.film.original_language = 'KR';
                }

                if (this.film.original_language == 'CS') {
                    this.film.original_language = 'CZ';
                }
            
                if (this.film.original_language == 'HI') {
                    this.film.original_language = 'IN';
                }
            
                if (this.film.original_language == 'ZH') {
                    this.film.original_language = 'CN';
                }

            },
            // Creo una funzione per arrotondare il voto medio dei Film o Serie TV
            getAverageVote(x) {
                return Math.ceil(x / 2);
            },
            getCreditsApi() {

                // Svuoto l'Array degli Attori
                this.credits = [];

                // Svuoto l'Array dei Generi
                this.store.genresIds = [];

                // Richiamo le API per trovare gli Attori
                axios.
                get('https://api.themoviedb.org/3/' + this.gender + '/' + this.film.id + '/credits?api_key=82426cbd7a1ce54b563c262757bd3dc3')
                .then((response) => {

                    console.log('Questo è il CONSOLE.LOG DEI DATI: ',response);

                    // Creo un ciclo per pushare nell'Array degli Attori i primi 5 nomi resituiti dall'oggetto principale
                    for (let j = 0; j < 5; j++) {
                        this.credits.push(response.data.cast[j].name);
                    }

                    console.log('Questi sono i CREDITS: ',this.credits);

                })
                .catch((error) => {
                    this.credits = [];
                    this.credits.name = 'Attori non trovati';
                })
                .finally(() => {
                    console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
                });

                // Richiamo le API per trovare i Generi
                axios
                .get('https://api.themoviedb.org/3/' + this.gender + '/' + this.film.id + '?api_key=82426cbd7a1ce54b563c262757bd3dc3')
                .then((response) => {
                    console.log(response.data.genres);

                    // Creo un ciclo per pushare nell'Array dei Generi quelli resituiti dall'oggetto principale
                    for (let y = 0; y < response.data.genres.length; y++) {
                        this.store.genresIds.push(response.data.genres[y].name);
                    }

                    console.log('Questi sono i generi: ', this.store.genresIds);
                })
                .catch((error) => {
                    this.store.genresIds = [];
                    this.store.genresIds.name = 'Generi non disponibili';
                })
                .finally(() => {
                    console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
                });

                // Cambio il valore della Flag che gestisce la visualizzazione dell'Overview
                this.showCredits = true
            },
        }, 
        props: {
            film: Object,
            name: String,
            originalName: String,
            gender: String,
            filmGenres: String,
            singleGenre: String
        },
        created() {
        },
        mounted() {
            // Richiamo la funzione per le stringhe quando il componente viene montato
            this.langFlagControl();
        },
        computed: {
        }
    }

</script>

<template>
        <!-- Qui Inizia il contenitore delle Card del Film o Serie TV -->
        <div 
        class="film-info">
            <!-- Qui inizia il contenuto delle Card -->
            <div class="film-card">
                <img v-if="film.poster_path != null"
                class="film-img"
                :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
                :alt="name">
                <img v-else class="film-img" src="/public/immagine-mancante.webp" alt="">
                <!-- Qui iniziano le info delle Card -->
                <div class="film-card-body">
                    <ul>
                        <li>
                            Titolo:
                            <h4 class="card-title mb-3">
                             {{ name }}
                            </h4>
                        </li>
                        <li class="mb-3">
                            Titolo Originale: 
                            <h6>
                                {{ originalName }}
                            </h6>
                        </li>
                        <li v-if="showCredits == false" class="list-overview mb-1">
                            Trama:
                            <p>
                                {{ film.overview }}
                            </p>

                        </li>
                        <button 
                        class="btn btn-outline-secondary"
                        v-if="showCredits == false"
                        @click="getCreditsApi()"
                        href="#nogo">
                            <i class="fa-solid fa-circle-chevron-down">
                                Show More Info
                            </i>
                        </button>
                        <div
                        v-if="showCredits == true"
                        class="show-credits">
                        Cast:
                            <li
                            v-for="(name, i) in credits"
                            :key="i">
                                {{ name }}
                            </li>
                        Generi: 
                            <li
                            class="text-white"
                            :data-value="singleGenre" 
                            v-for="(singleGenre, i) in store.genresIds"
                            :key="i">
                                {{ singleGenre }}
                            </li>
                        </div>
                        <div class="vote-lang-info z-1">
                            <li>
                                Lingua: 
                                <img
                                class="lang-flag"
                                :src="'https://flagsapi.com/' + film.original_language + '/flat/64.png'"
                                :alt="film.original_language">
                            </li>
                            <li>
                                <i v-for="(elem, i) in 5"
                                :key="i" 
                                :class="{
                                'fa-solid' : getAverageVote(film.vote_average) >= i,
                                'fa-regular' : getAverageVote(film.vote_average) < i
                                }"
                                class="fa-star"></i>
                            </li>
                        </div>
                    </ul> 
                </div>
                <!-- Qui finiscono le info delle Card -->
            </div> 
            <!-- Qui finisce il contenuto delle Card -->
        </div>
        <!-- Qui finisce il contenitore delle Card del Film o Serie TV -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

    .film-info {
        width: $film-info-width;
        margin: $film-info-margin;

        cursor: pointer;
        .film-card {
            @include film-card;
            position: relative;
            overflow: hidden;

            .film-img {
                @include film-img;
            }
            .film-card-body {
                @include film-card-body;
                position: absolute;
                top: 0;
                overflow: auto;
                background-color: $list-bg-color;

                ul {
                    @include ul;

                    li {
                        margin-bottom: 10px;
                        color: $main-color-info-text;


                        > i {
                            color: $stars-color;
                        }

                        h4, h6, p{
                            color: white;
                            margin-bottom: 10px;
                        }

                    }
                    .show-credits {
                        color: $main-color-info-text;

                        >li {
                            margin-top: 5px;
                            margin-left: 20px;
                            list-style: circle;
                            color: white;
                        }
                    }

                    .vote-lang-info {
                        color: $main-color-info-text;
                    }

                    .lang-flag {
                    width: $lang-flag-width;
                    }
                }
            }
        }
    }

    .film-info:hover {
        @include film-info-hover;
    }

    .film-card:hover .film-card-body {
        display: block;
    }

</style>
