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
    .film-info {
        margin: 10px 20px;
        cursor: pointer;
        .film-card {
            width: 100%;
            position: relative;
            height: 450px;

            .film-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .film-card-body {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                display: none;

                ul {
                    list-style: none;
                    background-color: rgba(0, 0, 0, 0.76);
                    color: white;
                    padding: 10px;
                    height: 100%;

                    li {
                        margin-bottom: 10px;

                        > i {
                            color: gold;
                        }
                    }

                    .list-overview {
                        height: calc(100% - 320px);
                        overflow: auto;
                    }

                    .vote-lang-info {
                        position: absolute;
                        bottom: 0;
                    } 
                    .lang-flag {
                    width: 50px;
                    }
                }

                ::-webkit-scrollbar {
                    width: 10px;
                }

                ::-webkit-scrollbar-thumb {
                    background-color: #6c757d;
                }

                ::-webkit-scrollbar-track {
                    background-color: #343a40;
                }

            }

        }

    }

    .film-info:hover {
        box-shadow: 0px -1px 17px 28px #000000;
        transform:rotateY(-360deg);
        transition: transform 1.2s;
    }

    .film-card:hover .film-card-body {
        display: block;
    }

</style>
