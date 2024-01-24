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
            }
        }, 
        props: {
            film: Object
        },
        mounted() {
            this.langFlagControl();
        }  

    }
</script>

<template>
        <div class="film-info mb-2">
            <div class="card">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title mb-2">
                        Titolo: {{ film.title }}
                    </h5>
                    
                    <p class="card-text mb-3">
                        Titolo Originale: {{ film.original_title }}
                    </p>

                    <div class="mb-3">
                        Lingua: 
                        <img
                        class=" border"
                        :src="'https://flagsapi.com/' + film.original_language + '/flat/64.png'" :alt="film.original_language">

                    </div>

                    <p class="card-text">
                        Voto: {{ film.vote_average }}
                    </p>
                </div>
            </div>            
        </div>
</template>

<style lang="scss" scoped>
    .film-info {
        .card {
            width: 400px;
            height: 250px;
        }
        
        img {
            width: 50px;
        }
    }

</style>
