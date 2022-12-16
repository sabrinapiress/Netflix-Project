const API_KEY = '96b5e300bdd08f6df4cef62be187b4d7'
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmI1ZTMwMGJkZDA4ZjZkZjRjZWY2MmJlMTg3YjRkNyIsInN1YiI6IjYzOWI2MmM5OGRkYzM0MDA4NDM5MzRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6dk7GXQRz94xNpivJZiFI52bP0RpX3MCv0m5cDtesuk'
const BASE_URL = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoitn) => {
    const req = await fetch(`${BASE_URL}${endpoitn}`)
    if(req){
        const json = await req.json()
        return json
    }else{
        console.log('erro no fetch')
    }
  
}
export default {
    getHomeList: async () => {
        return [
            {
                slug:'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trendig',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },  
            {
                slug:'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getMovieInfo: async(movieId, type) => {
        let info = {}
        if(movieId){
           switch (type) {
            case "movie":
                info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            break;
            default:
                info = null
                break;
           }

            
        }
       
        return info

    }
}

// export default Controller