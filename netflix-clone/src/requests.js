const API_KEY = "369a4e60824e41f42142ba19227961d0";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv/api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?/api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?/api_key=${API_KEY}&with=genres=28`,
    fetchComedyMovies: `discover/movie?/api_key=${API_KEY}&with=genres=35`,
    fetchHorroMovies: `discover/movie?/api_key=${API_KEY}&with=genres=27`,
    fetchRomanceMovies: `discover/movie?/api_key=${API_KEY}&with=genres=10749`,
    fetchDocumentaries: `discover/movie?/api_key=${API_KEY}&with=genres=99`,
}

export default requests