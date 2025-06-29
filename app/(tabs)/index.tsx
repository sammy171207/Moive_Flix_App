import MoiveCard from '@/components/MoiveCard'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMoives } from '@/services/api'
import { useFetch } from '@/services/useFetch'
import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Home = () => {
  const { data: featuredMovies, loading, error } = useFetch(() => fetchMoives({ query: '' }), true)

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="flex-1 absolute w-full z-0 " resizeMode="cover"/>

      <FlatList 
        data={featuredMovies} 
        renderItem={({item})=><MoiveCard {...item}/>}
        keyExtractor={(item)=>item.id.toString()}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{
          justifyContent:'center',
          gap:16,
          marginVertical:16
        }}
        contentContainerStyle={{paddingBottom:100}}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image source={icons.logo} className='w-12 h-10'/>
            </View>

            <View className='my-5 px-5'>
              <Text className="text-2xl text-white font-bold mb-2">
                Welcome to MovieApp
              </Text>
              <Text className="text-gray-300 text-base">
                Discover amazing movies and TV shows
              </Text>
            </View>

            <View className='px-5 mb-4'>
              <Text className="text-xl text-white font-bold">
                Featured Movies
              </Text>
            </View>

            {loading && (<ActivityIndicator size="large" color="#0000ff" className='my-3'/>)}

            {error &&(
              <Text className='text-red-500 px-5 my-3'>
                Error: {error.message}
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                No movies available at the moment
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  )
}

export default Home