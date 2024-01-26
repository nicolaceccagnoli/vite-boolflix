<script >
import { store } from '../store';

    export default {
        data() {
            return {
                store,
                search: false
            };
        },
        methods: {
            showSearchBar(){
                this.search = true;
            }
        },
        components: {
        },

    }
</script>

<template>
    <header>
        <div class="p-2 row g-0 align-items-center ">

            <div class="col-auto me-auto" id="logo">
                <img src="/public/netflix_logo.svg.png" alt="Netflix Logo">
            </div>

            <div class="col-auto">

                <form @submit.prevent="$emit('performSearch')" class="input-group my-3">
                    <button @click="showSearchBar()" 
                    v-show="search == false"
                    class="btn btn-outline-secondary text-white">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input
                    v-show="search == true"
                    v-model="store.searchFilm"
                    type="text" placeholder="Search Film" aria-label="Search Film" aria-describedby="button-addon2">
                    <button 
                    v-show="search == true"
                    class="text-white btn btn-outline-secondary" type="submit" id="button-addon2">
                        Search
                    </button>
                </form>

            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

header {

    >div {
        height: 100px
    }

    @include header;

    background-color: $header-bg-color;

    #logo img {
        width: $logo-width;
    }

}
</style>
