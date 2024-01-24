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
        <div class="series-info mb-2">
            <div class="card">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="mb-2">
                        Titolo: {{ series.name }}
                    </h5>
                    
                    <p class="card-text mb-3">
                        Titolo Originale: {{ series.original_name }}
                    </p>

                    <div class="mb-3">
                        Lingua: 
                        <img
                        class="border"
                        :src="'https://flagsapi.com/' + series.original_language + '/flat/64.png'" :alt="series.original_language">
                    </div>

                    <p class="card-text">
                        Voto: {{ series.vote_average }}
                    </p>
                </div>
            </div>            
        </div>
</template>

<style lang="scss" scoped>
    .series-info {
        .card {
            width: 400px;
            height: 250px;
        }

        img {
            width: 50px;
        }

    }

</style>
