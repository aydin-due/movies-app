import { MovieCast } from '@/infrastructure/interfaces/movie.interface'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CastCard from './CastCard'

interface Props {
    cast: MovieCast[]
}

const MovieCastSlider = ({ cast }: Props) => {
    return (
        <View>
            <Text className='text-xl font-bold px-4 my-2'>Cast</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={cast}
                keyExtractor={(e, i) => `${e.id}-${i}`}
                renderItem={({ item }) => <CastCard cast={item} />}
            />
        </View>
    )
}

export default MovieCastSlider