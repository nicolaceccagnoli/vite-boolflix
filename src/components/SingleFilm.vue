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
        },
        mounted() {
            this.langFlagControl();
            this.getAverageVote();
        }  

    }
</script>

<template>
        <div class="film-info mb-2 col-2 g-0">
            <div class="film-card">
                <img
                class="film-img"
                :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
                :alt="film.title">
                <div class="film-card-body">
                    <h5 class="card-title mb-2">
                        Titolo: {{ film.title }}
                    </h5>
                    
                    <p class="film-card-text mb-3">
                        Titolo Originale: {{ film.original_title }}
                    </p>

                    <div class="mb-3">
                        Lingua: 
                        <img
                        class="lang-flag border"
                        :src="'https://flagsapi.com/' + film.original_language + '/flat/64.png'" :alt="film.original_language">
                    </div>

                    <p class="film-card-vote">
                        <!-- Voto: {{ getAverageVote() }} -->
                        <i v-for="(elem, i) in 5"
                        :key="i" 
                        :class="{
                            'fa-solid' : getAverageVote(film.vote_average) >= i,
                            'fa-regular' : getAverageVote(film.vote_average) < i
                        }"
                        class="fa-star"></i>
                    </p>
                </div>
            </div>            
        </div>
</template>

<style lang="scss" scoped>
    .film-card {
        background-color: red;
        height: 100vh;
        width: 400px;

        .film-img {
            width: 100%;
        }
        .film-card {
            height: 250px;
        }

        .lang-flag {
            width: 50px;
        }
    }

</style>
