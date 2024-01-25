<script >
import SingleFilms from './SingleFilm.vue';
import { store } from '../store';

    export default {
        data() {
            return {
                store
            };
        },
        methods: {

        },
        components: {
            SingleFilms,
        }

    }
</script>

<template>
    <main>
        <div class="container-fluid p-2">

            <div class="row flex-wrap justify-content-center">

                <SingleFilms
                class="col-md-2"
                v-for="(film, i) in store.trends"
                :key="i" 
                :film="film"
                :poster="film.poster_path"
                :name="film.title"
                :originalName="film.original_title"
                :gender="'movie'"
                />

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

                <SingleFilms
                class="col-md-2"
                v-for="(film, i) in store.tvSeries"
                :key="i" 
                :film="film"
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
    height: 100%;
    background-color: $main-bg-color;
}

</style>
