import MoiveCard from "@/components/MoiveCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMoives } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
export default function Index() {
  const router=useRouter();
  const {data:moives,loading:moivesloading,error:moiveError}=useFetch(()=>fetchMoives({query:''}))
  return (
    <View className="flex-1 bg-primary ">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{
        minHeight:"100%",
        paddingBottom:10
      }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
         {moivesloading ? (
           <ActivityIndicator size="large" color="white" />
         ) : moiveError ? (
           <Text>
             Error: {moiveError?.message ?? String(moiveError)}
           </Text>
         ) : (
            <View className="flex-1 mt-5">
           <SearchBar 
            onPress={()=>router.push("/search")}
            placeholder="Search for Moives"
           />
        <>
           <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Moives</Text>
           <FlatList 
           data={moives} 
           renderItem={({item})=>(
         <MoiveCard {...item}/>
           )} keyExtractor={(item)=>item.id.toString()}
           numColumns={3}
           columnWrapperStyle={
            {
              justifyContent:"flex-start",
              gap:20,
              paddingRight:5,
              marginBottom:10
            }
           }
           className="mt-2 pb-32"
           scrollEnabled={false}
           
           />
        </>

        </View>
         )}
      
      </ScrollView>
    </View>
  );
}