<script >
import SingleFilms from './SingleFilm.vue';
import { store } from '../store';

    export default {
        data() {
            return {
                store,
                includeGenre: false
            };
        },
        methods: {

            showCommonGenres() {

                const commonGenres = this.store.genresTvAndFilm.some(genre => this.store.selectGenres.includes(genre));

                if (commonGenres) {
                    // Ci sono elementi in comune tra genresTvAndFilm e selectGenres
                    this.includeGenre = true;
                } 
                // else {
                    // Non ci sono elementi in comune
                    // console.log("Non ci sono elementi in comune.");
                // }

                console.log('GENERI IN COMUNE', commonGenres);
            }
        },
        components: {
            SingleFilms,
        },
        mounted() {
            this.showCommonGenres();
        }
    }
</script>

<template>
    <main>
        <div class="container-fluid p-2">

            <div 
            class="row flex-wrap ">

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

                <SingleFilms
                v-show="this.includeGenre == false"
                class="col-md-2"
                v-for="(film, i) in store.films"
                :key="i" 
                :film="film"
                :poster="film.poster_path"
                :name="film.title"
                :originalName="film.original_title"
                :gender="'movie'"
                />

                <SingleFilms
                v-show="this.includeGenre == false"
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
}
</style>
