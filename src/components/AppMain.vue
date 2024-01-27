<script >
import SingleFilms from './SingleFilm.vue';
import { store } from '../store';

    export default {
        data() {
            return {
                store,
            };
        },
        methods: {
            
        },
        components: {
            SingleFilms,
        },
        computed: {
        }
    }
</script>

<template>
    <main>
        <div class="container-fluid p-2">

            <div class="row flex-wrap ">

                <div
                v-show="store.trendsFilm.length > 0"
                class="trend-title col-12 mb-3">
                    <h3>
                        Oggi in tendenza tra i Film: 
                    </h3>
                </div>

                <SingleFilms
                class="col-md-2"
                v-for="(film, i) in store.trendsFilm"
                :key="i" 
                :film="film"
                :poster="film.poster_path"
                :name="film.title"
                :originalName="film.original_title"
                :gender="'movie'"
                />

                <div 
                v-show="store.trendsTv.length > 0"
                class="trend-title col-12 mb-3">
                    <h3>
                        Oggi in tendenza tra le Serie TV:
                    </h3>
                </div>

                <SingleFilms
                class="col-md-2"
                v-for="(film, i) in store.trendsTv"
                :key="i" 
                :film="film"
                :poster="film.poster_path"
                :name="film.name"
                :originalName="film.original_name"
                :gender="'tv'"
                />

            </div>

            <div class="row flex-wrap ">

                <div
                v-show="store.trendsFilm.length == 0"
                class="trend-title col-12 mb-3">
                    <h3>
                        Ecco i Film trovati: 
                    </h3>
                </div>


                <SingleFilms
                class="col-md-2"
                v-for="(film, i) in store.films"
                :key="i" 
                :film="film"
                :poster="film.poster_path"
                :name="film.title"
                :originalName="film.original_title"
                :gender="'movie'"
                />

                <div 
                v-show="store.trendsTv.length == 0"
                class="trend-title col-12 mb-3">
                    <h3>
                        Ecco le Serie TV trovate:
                    </h3>
                </div>


                <SingleFilms
                class="col-md-2"
                v-for="(film, i) in store.tvSeries"
                :key="i" 
                :film="film"
                :poster="film.poster_path"
                :name="film.name"
                :originalName="film.original_name"
                :gender="'tv'"
                />
                
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

main {
    min-height: calc(100vh - 100px);
    background-color: $main-bg-color;

    .trend-title {
        width: 100%;
        color: white;
        font-size: 18px;
        margin-top: 20px; 
    }
}
</style>
