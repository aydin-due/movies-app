import { movieApi } from "@/core/api/movie-api";
import { MovieCreditsResponse } from "@/infrastructure/interfaces/movie-credits-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const getMovieCast = async (id: number | string) => {
    try {
        const { data } = await movieApi.get<MovieCreditsResponse>(`/${id}/credits`)
        const cast = data.cast.map(MovieMapper.fromMovieDbToCast)
        return cast;
    } catch (e) {
        console.log('error')
        throw 'cannot load cast'
    }
}