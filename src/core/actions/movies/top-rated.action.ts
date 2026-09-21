import { movieApi } from "@/core/api/movie-api"
import { MoviesResponse } from "@/infrastructure/interfaces/movies-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers"

export const topRatedMoviesAction = async () => {
    try {
        const { data } = await movieApi.get<MoviesResponse>('/top_rated')
        const movies = data.results.map(MovieMapper.fromMovieDbToMovie)
        return movies;
    } catch (e) {
        console.log('error')
        throw 'cannot load now playing movies'
    }
} 