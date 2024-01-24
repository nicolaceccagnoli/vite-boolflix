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
        <div class="film-info">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        {{ series.name }}
                    </h5>
                    
                    <p class="card-text">
                        {{ series.original_name }}
                    </p>

                    <img
                    class=" border"
                    :src="'https://flagsapi.com/' + series.original_language + '/flat/64.png'" :alt="series.original_language">

                    <p class="card-text">
                        {{ series.vote_average }}
                    </p>
                </div>
            </div>            
        </div>
</template>

<style lang="scss" scoped>

</style>
