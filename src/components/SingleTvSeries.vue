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
                this.series.original_language = this.series.original_language.toUpperCase();

                if (this.series.original_language == 'EN') {
                    this.series.original_language = 'GB';
                }

                if (this.series.original_language == 'JA') {
                    this.series.original_language = 'JP';
                }
            }
        }, 
        props: {
            series: Object
        },
        mounted() {
            this.langFlagControl();
        }  

    }
</script>

<template>
        <div class="series-info mb-2 col-2">
            <div class="series-card">
                <img 
                class="series-img"
                :src="'https://image.tmdb.org/t/p/w342' + series.poster_path"
                :alt="series.name">
                <div class="series-card-body">
                    <h5 class="mb-2">
                        Titolo: {{ series.name }}
                    </h5>
                    
                    <p class="series-card-text mb-3">
                        Titolo Originale: {{ series.original_name }}
                    </p>

                    <div class="mb-3">
                        Lingua: 
                        <img
                        class="lang-flag border"
                        :src="'https://flagsapi.com/' + series.original_language + '/flat/64.png'" :alt="series.original_language">
                    </div>

                    <p class="series-card-vote">
                        Voto: {{ series.vote_average }}
                    </p>
                </div>
            </div>            
        </div>
</template>

<style lang="scss" scoped>
    .series-card {
        background-color: red;
        height: 100vh;
        width: 400px;

        .series-img {
            width: 100%;
        }

        .series-card {
            width: 400px;
        }

        .lang-flag {
            width: 50px;
        }

    }

</style>
