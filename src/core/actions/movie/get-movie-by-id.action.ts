import { movieApi } from "@/core/api/movie-api";
import { MovieDetailsResponse } from "@/infrastructure/interfaces/movie-details-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const getMovieByIdAction = async (id: number | string) => {
    try {
        const { data } = await movieApi.get<MovieDetailsResponse>(`/${id}`)
        return MovieMapper.fromMovieDbToMovieDetails(data);
    } catch (e) {
        console.log('error')
        throw 'cannot load now playing movies'
    }
}