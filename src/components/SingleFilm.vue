<script >
import { store } from '../store';

    export default {
        data() {
            return {
                store
            };
        },
        methods: {
            langFlagControl() {
                this.film.original_language = this.film.original_language.toUpperCase();

                if (this.film.original_language == 'EN') {
                    this.film.original_language = 'GB';
                }

                if (this.film.original_language == 'JA') {
                    this.film.original_language = 'JP';
                }
            },
            getAverageVote(x) {
                return Math.ceil(x / 2);
            }

        }, 
        props: {
            film: Object,
            name: String,
            originalName: String
        },
        mounted() {
            this.langFlagControl();
            this.getAverageVote();
        }  

    }
</script>

<template>

        <!-- Qui Inizia il contenitore delle Card del Film o Serie TV -->
        <div class="film-info mb-2">
            <!-- Qui inizia il contenuto delle Card -->
            <div class="film-card">
                <img
                class="film-img"
                :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
                :alt="film.title">
                <!-- Qui iniziano le info delle Card -->
                <div class="film-card-body">
                    <ul>
                        <li>
                            <h5 class="card-title mb-2">
                            Titolo: {{ name }}
                            </h5>
                        </li>
                        <li>
                            Titolo Originale: {{ originalName }}
                        </li>
                        <li>
                            Lingua: 
                            <img
                            class="lang-flag border"
                            :src="'https://flagsapi.com/' + film.original_language + '/flat/64.png'" :alt="film.original_language">
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
                        <li>
                            {{ film.overview }}
                        </li>
                    </ul>                  
                </div>
                <!-- Qui finiscono le info delle Card -->
            </div> 
            <!-- Qui finisce il contenuto delle Card -->
        </div>
        <!-- Qui finisce il contenitore delle Card del Film o Serie TV -->
</template>

<style lang="scss" scoped>
    .film-info {
        background-color: red;
        width: calc((100% / 5) - 40px);
        margin: 10px 20px;

    
        .film-card {
            width: 100%;

            .film-img {
                width: 100%;
                object-fit: cover;
            }

            .film-card-body {

            ul {
                list-style: none;

                li {
                    margin-bottom: 10px
                }
            }
            .lang-flag {
                width: 50px;
            }

            }

        }

    }

</style>
