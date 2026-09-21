import { Movie } from '@/infrastructure/interfaces/movie.interface';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { Carousel, CarouselRef } from "react-native-reanimated-carousel";
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[]
}

// dimensions when the screen loads, not updated if it changes to landscape
// Dimensions.get('screen').width

const MainSlideshow = ({ movies }: Props) => {
    const width = useWindowDimensions().width
    const ref = React.useRef<CarouselRef>(null);
    const progress = useSharedValue<number>(0);

    return (
        <View className='h-[250px] w-full'>
            <Carousel
                ref={ref}
                progress={progress}
                itemSize={200}
                // defaultIndex={1}
                data={movies}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} />}
                style={{ width: width, height: 350, justifyContent: 'center', alignItems: 'center' }}
                layout={{ type: 'parallax', scale: 0.9, offset: 50, }}
            />
        </View>
    )
}

export default MainSlideshow