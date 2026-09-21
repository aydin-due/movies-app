import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import useMovie from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {
    const { id } = useLocalSearchParams();

    const { movieQuery, castQuery } = useMovie(+id);

    if (movieQuery.isLoading || !movieQuery.data) {
        return (<View className="flex flex-1 justify-center items-center">
            <Text className='mb-4'>wait...</Text>
            <ActivityIndicator color="purple" size={30} />
        </View>)
    }

    return (
        <ScrollView>
            <View className='mb-10'>
                <MovieHeader poster={movieQuery.data.poster} originalTitle={movieQuery.data.originalTitle} title={movieQuery.data.title} />
                <MovieDescription movie={movieQuery.data} />
                {castQuery.data && <MovieCast cast={castQuery.data} />}
            </View>
        </ScrollView>
    )
}

export default MovieScreen