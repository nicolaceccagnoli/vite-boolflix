import { reactive } from 'vue';

export const store = reactive ({

    // API per la ricerca dei Film
    baseFilmUrl: 'https://api.themoviedb.org/3/search/movie?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // API per la ricerca delle Serie TV
    baseTvSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // API per i trend dei Film
    baseTrendFilmUrl: 'https://api.themoviedb.org/3/trending/movie/day?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // API per i trend delle Serie TV
    baseTrendTvUrl: 'https://api.themoviedb.org/3/trending/tv/day?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // API per i Credits dei Film
    baseCreditMovieUrl: 'https://api.themoviedb.org/3/movie/268/credits?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // Api per i Generi dei Film
    baseGenresFilmUrl: 'https://api.themoviedb.org/3/genre/movie/list?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // Api per i Generi dei Film
    baseGenresTvUrl: 'https://api.themoviedb.org/3/genre/tv/list?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // Creo una variabile per l'input di ricerca
    searchFilm: '',
    // Creo un Array vuoto dove pushero i film
    films: [],
    // Creo un Array vuoto dove pushero le Serie TV
    tvSeries: [],
    // Creo un Array vuoto dove pushare le serie TV in trend
    trendsTv: [],
    // Creo un Array vuoto dove pushare i film in trend
    trendsFilm: [],
    // Creo un Array unico dove pushare tutti i generi
    genresTvAndFilm: [],
    // Creo un Array vuoto dove pushare le option della select
    selectGenres: [],
    // Creo un Array per i Generi dei SingleFIlm
    genresIds: [],
    // Dichiaro un Array temporaneo dove salvare i Film che filtro
    tempFilmArray: [],
    // Dichiaro un Array temporaneo dove salvare le Serie TV che filtro
    tempTvArray: []
})
