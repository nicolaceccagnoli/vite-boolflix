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
        <div class="container p-2">

            <div class="row">
                <SingleFilms
                class="col-6 col-md-4"
                v-for="(film, i) in store.films"
                :key="i" 
                :film="film"/>

                <SingleTvSeries
                class="col-6 col-md-4"
                v-for="(series, i) in store.tvSeries"
                :key="i"
                :series="series" />
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>
