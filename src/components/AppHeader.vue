<script >
import { store } from '../store';

    export default {
        data() {
            return {
                store,
                // Creo una flag per la Search Bar
                search: false
            };
        },
        methods: {
            // Creo la Funzione che mostri la Search Bar in pagina
            showSearchBar(){
                this.search = true;
            },
        },
        components: {
        },

    }
</script>

<template>
    <header>
        <div class="p-2 row g-0 align-items-center ">

            <a 
            href="/"
            class="col-auto me-auto" id="logo">
                <img src="/netflix_logo.svg.png" alt="Netflix Logo">
            </a>
            
            <div class="col-auto d-flex align-items-center">

                <select id="genres" name="generi" class="btn-outline-secondary me-2 p-2">
                    <option selected value="">Scegli il genere</option>
                    <option v-for="(singleGenre, i) in store.genresTvAndFilm" :key="i" :value="singleGenre">
                        {{ singleGenre }}
                    </option>
                </select>

                <form @submit.prevent="$emit('performSearch')" class="input-group my-3">
                    <button @click="showSearchBar()" v-show="search == false" class="btn btn-outline-secondary text-white">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input v-show="search == true" v-model="store.searchFilm" type="text" placeholder="Search Film" aria-label="Search Film" aria-describedby="button-addon2" class="form-control me-2">
                    <button v-show="search == true" class="text-white btn btn-outline-secondary" type="submit" id="button-addon2">
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

    > div {
        height: $header-hg;

        #genres {
            background-color: rgba(0, 0, 0, 0.8); 
            color: white; 
            padding: 8px; 
        }

    }

    @include header;

    background-color: $header-bg-color;

    #logo img {
        width: $logo-width;
    }

}
</style>
