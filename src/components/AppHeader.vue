<script >
import { store } from '../store';
import axios from 'axios';

    export default {
        data() {
            return {
                store,
                // Creo una flag per la Search Bar
                search: false,
                // Creo una flag per la lista dei Generi
                showGenreList: false
            };
        },
        methods: {
            // Creo la Funzione che mostri la Search Bar in pagina
            showSearchBar(){
                this.search = true;
            },
            toggleGenreList() {
                this.showGenreList = !this.showGenreList;
            },

            getGenresApiCall() {
                // Richiamo l'API per cercare i generi dei Film
                axios
                .get(this.store.baseGenresFilmUrl)
                .then((response) => {
                    console.log('Questa è la chiamata dei GENERI FILM: ',response.data.genres)
                        // Creo un ciclo per ogni singolo oggetto Genere all'interno dell'oggetto principale
                        for (let x = 0; x < response.data.genres.length; x++) {
                        this.store.genresTvAndFilm.push(response.data.genres[x].name);
                    }
                    console.log('ARRAY DEI GENERI solo con i FILM: ', this.store.genresTvAndFilm);
                })
                .catch((error) => {
                    this.store.genresTvAndFilm = [];
                })
                .finally(() => {
                    console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
                });

                // Richiamo l'API per cercare i generi delle Serie TV
                axios
                .get(this.store.baseGenresTvUrl)
                .then((response) => {
                    console.log('Questa è la chiamata dei GENERI SERIE TV: ',response.data.genres)
                        // Creo un ciclo per ogni singolo oggetto Genere all'interno dell'oggetto principale
                        for (let x = 0; x < response.data.genres.length; x++) {

                            // Applico un controllo per cui se uno dei Generi è già presente nella lista allora non viene pushato
                            if (!this.store.genresTvAndFilm.includes(response.data.genres[x].name)) {
                                this.store.genresTvAndFilm.push(response.data.genres[x].name);
                            }
                        
                    }
                    console.log('ARRAY DEI GENERI solo con le SERIE TV: ', this.store.genresTvAndFilm);

                })
                .catch((error) => {
                    this.store.genresTv = [];
                })
                .finally(() => {
                    console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
                });

            },
            searchGender(selectedValue) {

                if (!this.store.selectGenres.includes(selectedValue) || this.store.selectGenres.length === 0) {
                    this.store.selectGenres.push(selectedValue);
                } else {
                    const elem = this.store.selectGenres.indexOf(selectedValue);
                    this.store.selectGenres.splice(elem, 1);
                }

                console.log(this.store.selectGenres);


                

                this.showGenreList = false;




            }
            
        },
        mounted() {
            this.getGenresApiCall();
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

                <div class="genres-list me-2">
                    <button @click="toggleGenreList" class="btn-outline-secondary"
                    id="genres">
                        Filtra per genere
                    </button>

                    <ul 
                    v-if="showGenreList"
                    class="list-group">
                        <li 
                        @click="searchGender(singleGenre)"
                        v-for="(singleGenre, i) in store.genresTvAndFilm" 
                        :key="i" 
                        :data-value="singleGenre"
                        class="list-group-item">
                            {{ singleGenre }}
                        </li>
                    </ul>
                </div>

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

        .genres-list {
            position: relative;
        }

        #genres {
            background-color: rgba(0, 0, 0, 0.8); 
            color: white; 
            padding: 8px; 
            width: 200px;
        }
        .genres-list ul {
            position: absolute;
            top: 100%;
            left: 0;
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
        }

        .genres-list ul li:hover {
            background-color: rgba(190, 2, 2, 0.785);
            color: white;
            cursor: pointer;
        }


    }

    @include header;

    background-color: $header-bg-color;

    #logo img {
        width: $logo-width;
    }

}
</style>
