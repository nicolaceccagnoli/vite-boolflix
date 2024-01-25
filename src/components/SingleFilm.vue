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
            getAverageVote(x) {
                return Math.ceil(x / 2);
            }

        }, 
        props: {
            film: Object,
            name: String,
            originalName: String,
        },
        mounted() {
            this.langFlagControl();
            this.getAverageVote();
        },
        computed: {
            
        }

    }
</script>

<template>
        <!-- Qui Inizia il contenitore delle Card del Film o Serie TV -->
        <div class="film-info">
            <!-- Qui inizia il contenuto delle Card -->
            <div class="film-card">
                <img v-if="film.poster_path != null"
                class="film-img"
                :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
                :alt="name">
                <img v-else class="film-img" src="/public/immagine-mancante.png" alt="">
                <!-- Qui iniziano le info delle Card -->
                <div class="film-card-body">
                    <ul>
                        <li>
                            <h4 class="card-title mb-3">
                            Titolo: {{ name }}
                            </h4>
                        </li>
                        <li class="mb-3">
                            Titolo Originale: 
                            <h6>
                                {{ originalName }}
                            </h6>
                        </li>
                        <li class="list-overview mb-1">
                            <p>
                                {{ film.overview }}
                            </p>
                        </li>
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

            .film-img {
                @include film-img;
            }
            .film-card-body {
                @include film-card-body;
                position: absolute;
                top: 0;

                ul {
                    @include ul;
                    background-color: $list-bg-color;

                    li {
                        margin-bottom: 10px;

                        > i {
                            color: $stars-color;
                        }
                    }

                    .list-overview {
                        height: $list-overview-height;
                        overflow: auto;
                    }

                    .vote-lang-info {
                        position: absolute;
                        bottom: 0;
                    } 
                    .lang-flag {
                    width: $lang-flag-width;
                    }
                }

                ::-webkit-scrollbar {
                    width: 10px;
                }

                ::-webkit-scrollbar-thumb {
                    background-color: $scrollbar-thumb-bg;
                }

                ::-webkit-scrollbar-track {
                    background-color: $scrollbar-track-bg;
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
