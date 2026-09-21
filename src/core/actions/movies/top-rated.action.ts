import { movieApi } from "@/core/api/movie-api"
import { MoviesResponse } from "@/infrastructure/interfaces/movies-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers"

interface Options {
    page?: number
    limit?: number
}

export const topRatedMoviesAction = async ({ page = 1, limit = 10 }: Options) => {
    try {
        const { data } = await movieApi.get<MoviesResponse>('/top_rated', {
            params: {
                page: page,
                limit: limit
            }
        })
        const movies = data.results.map(MovieMapper.fromMovieDbToMovie)
        return movies;
    } catch (e) {
        console.log('error')
        throw 'cannot load now playing movies'
    }
} 