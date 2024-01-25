import { reactive } from 'vue';

export const store = reactive ({

    // API per la ricerca dei Film
    baseFilmUrl: 'https://api.themoviedb.org/3/search/movie?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // API per la ricerca delle Serie TV
    baseTvSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // API per i trend
    baseTrendUrl: 'https://api.themoviedb.org/3/trending/all/day?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // API per i Credits dei Film
    baseCreditMovieUrl: 'https://api.themoviedb.org/3/movie/268/credits?api_key=82426cbd7a1ce54b563c262757bd3dc3',
    // Creo una variabile per l'input di ricerca
    searchFilm: '',
    // Creo un Array vuoto dove pushero i film
    films: [],
    // Creo un Array vuoto dove pushero le Serie TV
    tvSeries: [],
    // Creo un Array vuoto dove pushare i trend
    trends: [],
})
