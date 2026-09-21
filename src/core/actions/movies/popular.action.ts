import { movieApi } from "@/core/api/movie-api"
import { MoviesResponse } from "@/infrastructure/interfaces/movies-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers"

export const popularMoviesAction = async () => {
    try {
        const { data } = await movieApi.get<MoviesResponse>('/popular')
        const movies = data.results.map(MovieMapper.fromMovieDbToMovie)
        return movies;
    } catch (e) {
        console.log('error')
        throw 'cannot load now playing movies'
    }
} 