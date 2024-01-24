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
            SingleFilms
        }

    }
</script>

<template>
    <main>
        <div class="container">

            <SingleFilms v-for="(film, i) in store.films"
            :key="i" 
            :film="film"/>

        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
