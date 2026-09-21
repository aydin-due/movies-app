import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    // safe area insets is more accurate than safe area component
    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } = useMovies()

    // loading  for http reqs
    // fetching for cache
    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={30} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>movies app</Text>
                <MainSlideshow movies={nowPlayingQuery.data ?? []} />
                <MovieHorizontalList movies={popularQuery.data ?? []} title='trending' className='mb-5' />
                <MovieHorizontalList
                    movies={topRatedQuery.data?.pages.flat() ?? []}
                    title='top rated'
                    className='mb-5'
                    loadNextPage={topRatedQuery.fetchNextPage}
                />
                <MovieHorizontalList movies={upcomingQuery.data ?? []} title='upcoming' className='mb-5' />
            </View>
        </ScrollView>
    )
}

export default HomeScreen