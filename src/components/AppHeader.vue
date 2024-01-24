<script >
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
        },

    }
</script>

<template>
    <header>
        <div class="p-2 row">

            <div class="col-auto me-auto" id="logo">
                <img src="/public/netflix_logo.svg.png" alt="Netflix Logo">
            </div>

            <div class="col-auto">
                <form @submit.prevent="$emit('performSearch')" class="input-group my-3">
                    <!-- <div>
                        {{ store.searchFilm }}
                    </div> -->
                    <input 
                    v-model="store.searchFilm"
                    type="text" placeholder="Search Film" aria-label="Search Film" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
                        Search
                    </button>
                </form>
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
header {

    background-color: black;

    #logo img {
        max-width: 150px;
    }
}
</style>
