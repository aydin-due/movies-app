import { Cast } from "../interfaces/movie-credits-response"
import { MovieDetailsResponse } from "../interfaces/movie-details-response"
import { Movie, MovieCast, MovieDetails } from "../interfaces/movie.interface"
import { Result } from "../interfaces/movies-response"

export class MovieMapper {
    static fromMovieDbToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average
        }
    }

    static fromMovieDbToMovieDetails = (movie: MovieDetailsResponse): MovieDetails => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
            budget: movie.budget,
            duration: movie.runtime,
            originalTitle: movie.original_title,
            genres: movie.genres.map(e => e.name),
            productionCompanies: movie.production_companies.map(e => e.name),

        }
    }

    static fromMovieDbToCast = (cast: Cast): MovieCast => {
        return {
            id: cast.id,
            name: cast.name,
            profile: `https://image.tmdb.org/t/p/w500${cast.profile_path}`,
            character: cast.character ?? ''
        }
    }
}