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
                showGenreList: false,
                // Creo una flag per la classe da assegnare al genere selezionato 
                active: false
            };
        },
        methods: {
            // Creo la Funzione che mostri la Search Bar in pagina
            showSearchBar(){
                this.search = true;
            },
            // Creo una funzione che mostri la lista dei Generi
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
                    this.store.genresTvAndFilm = response.data.genres;
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
                            if (!this.store.genresTvAndFilm.includes(response.data.genres[x])) {
                                this.store.genresTvAndFilm.push(response.data.genres[x]);
                            }
                    }
                    console.log('ARRAY DEI GENERI COMPLETO: ', this.store.genresTvAndFilm);

                })
                .catch((error) => {
                    this.store.genresTv = [];
                })
                .finally(() => {
                    console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
                });

            },
            searchGenres(selectedValue) {

                // Applico un controllo per cui se un elemento è già presente nell'array non lo pusha, se è già presente lo toglie
                if (!this.store.selectGenres.includes(selectedValue)) {
                    this.store.selectGenres.push(selectedValue);

                } else {
                    // Dichiaro una Variabile che farà corrispondere l'elemento già presente all'interno di selectGenres al suo stesso indice 
                    const elem = this.store.selectGenres.indexOf(selectedValue);
                    this.store.selectGenres.splice(elem, 1);
                }

                // Ogni volta che cerco un nuovo genere dichiaro l'Array temporaneo dei Film vuoto
                this.store.tempFilmArray = [];

                // Ogni volta che cerco un nuovo genere dichiaro l'Array temporaneo delle Serie TV vuoto
                this.store.tempTvArray = [];

                // Dichiaro una funzione che mi servirà per effettuare un controllo tra 2 array
                const isSubset = (array1, array2) =>
                    array2.every((element) => array1.includes(element));

                // Creo un ciclo for (shortcut) per ciclare su ogni singolo film dell'Array films 
                for (let film of this.store.films) {

                        // Se l'ID dei generi di ogni singolo film corrisponde all'ID del genere selezionato 
                        if (isSubset(film.genre_ids, this.store.selectGenres)) {

                            // Allora quel film viene aggiunto all'Array temporaneo dei film
                            this.store.tempFilmArray.push(film)

                        } 

                    console.log('ID DEI GENERI:' , film.genre_ids);

                }

                console.log('Generi selezionati:', this.store.selectGenres);

                console.log(this.store.selectGenres);

                // Creo un ciclo for (shortcut) per ciclare su ogni singola serie dell'Array tvSeries 
                for (let series of this.store.tvSeries) {

                    // Se l'ID dei generi di ogni singola serie TV corrisponde all'ID del genere selezionato 
                    if (isSubset(series.genre_ids, this.store.selectGenres)) {

                            // Allora quella serie TV viene aggiunto all'Array temporaneo delle Serie TV
                            this.store.tempTvArray.push(series)

                    } 

                }

                // Una volta scelto un genere allora la lista scompare nuovamente
                this.showGenreList = false;

            },
            
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
                    <button 
                    @click="toggleGenreList"
                    class="btn-outline-secondary"
                    id="genres">
                        Filtra per genere
                    </button>

                    <ul 
                    v-if="showGenreList"
                    class="list-group">
                        <li 
                        @click="searchGenres(singleGenre.id)"
                        v-for="(singleGenre, i) in store.genresTvAndFilm" 
                        :key="i" 
                        :data-value="singleGenre"
                        :class="{
                            'active' : this.store.selectGenres.includes(singleGenre.id)
                        }"
                        class="list-group-item">
                            {{ singleGenre.name }}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="$emit('performSearch')" class="input-group my-3">
                    <button @click="showSearchBar()" v-show="search == false" class="btn btn-outline-secondary text-white">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input
                    v-show="search == true"
                    v-model="store.searchFilm" 
                    type="text" placeholder="Search Film" aria-label="Search Film" aria-describedby="button-addon2" 
                    class="input-search form-control me-2">
                    <button
                    v-show="search == true" 
                    class="text-white btn btn-outline-secondary" type="submit" 
                    id="button-addon2">
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

        .input-search {
            @include input-search;
        }

        .input-search::placeholder {
            color: $main-input-color; 
        }

        .genres-list {
            position: relative;
        }

        #genres {
            @include genres;
        }
        .genres-list ul {
            @include genres-list-ul;
            position: absolute;
        }

        .genres-list ul li:hover {
            @include genres-list-li-hover;
        }

        .active {
            @include genres-list-active;
        }

    }

    @include header;

    background-color: $header-bg-color;

    #logo img {
        width: $logo-width;
    }

}
</style>
