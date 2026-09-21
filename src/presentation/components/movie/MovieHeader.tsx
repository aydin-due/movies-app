import { Ionicons } from "@react-native-vector-icons/ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';

interface Props {
    poster: string
    originalTitle: string
    title: string
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
    const { height: screenHeight } = useWindowDimensions();

    return (
        <>
            <LinearGradient
                colors={['rgba(0,0,0,0.3)', 'transparent']}
                style={{
                    height: screenHeight * .4,
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%'
                }}
            />

            <View style={{
                position: 'absolute',
                zIndex: 99,
                elevation: 9,
                top: 45,
                left: 10
            }}>
                <Pressable onPress={() => router.dismiss()}>
                    <Ionicons
                        name='arrow-back'
                        size={30}
                        color='white'
                        className='shadow' />
                </Pressable>
            </View>
            <View
                style={{ height: screenHeight * .7 }}
                className='shadow-xl shadow-black/20'>
                <View
                    className='flex-1 rounded-b-[25px] overflow-hidden'>
                    <Image
                        source={{ uri: poster }}
                        resizeMode="cover"
                        className='flex-1' />
                </View>
            </View>
            <View className='px-5 mt-5'>
                <Text className="font-normal">{title}</Text>
                <Text className="font-semibold text-2xl">{originalTitle}</Text>
            </View>
        </>
    )
}

export default MovieHeader