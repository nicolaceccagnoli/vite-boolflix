<script >
import SingleFilms from './SingleFilm.vue';
import SingleTvSeries from './SingleTvSeries.vue';
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
            SingleTvSeries
        }

    }
</script>

<template>
    <main>
        <div class="container d-flex flex-wrap justify-content-around">

            <SingleFilms v-for="(film, i) in store.films"
            :key="i" 
            :film="film"/>

            <SingleTvSeries v-for="(series, i) in store.tvSeries"
            :key="i"
            :series="series" />

        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
