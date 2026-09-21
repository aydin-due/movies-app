import { MovieCast } from '@/infrastructure/interfaces/movie.interface'
import { Image, Text, View } from 'react-native'

interface Props {
    cast: MovieCast
}

const CastCard = ({ cast }: Props) => {
    return (
        <View className='px-3 w-[110px]'>
            <Image
                source={{ uri: cast.profile }}
                className='shadow-lg rounded-2xl w-full h-full mb-2'
                style={{
                    width: 85,
                    height: 130
                }} />
            <Text className='font-bold'>{cast.name}</Text>
            <Text className=''>{cast.character}</Text>
        </View>
    )
}

export default CastCard