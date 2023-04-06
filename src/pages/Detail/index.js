import react, { useLayoutEffect, useState } from "react";
import { Entypo, AntDesign, Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    View, 
    Text, 
    ScrollView, 
    Pressable, 
    Image,
    Modal,
    Share
} from 'react-native'

import { VideoView } from "../../components/Video";
import { Ingredients } from "../../components/Ingredients";
import { Instructions } from "../../components/Instructions";

import { getFavorites, removeItem, isFavorite, saveFavorite} from '../../utils/storage'

import {styles} from  './styles'
import { theme } from '../../theme/styles'

export function Detail (){
    
    const route = useRoute();
    const navigation = useNavigation();

    const [showVideo, setShowVideo] = useState(false)
    const [favorite, setFavorite] = useState(false)

    
    useLayoutEffect(() => {

        async function getStatusFavorites(){
           const receipeFavorite = await isFavorite(route.params?.data)
           setFavorite(receipeFavorite)
        }

        getStatusFavorites()
         
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => handleFavoriteReceipe(route.params?.data)}>
                { 
                    favorite ? (
                        <Entypo 
                        name="heart"
                        size={28}
                        color= {theme.pink}
                        />
                    ): (
                        <Entypo 
                        name="heart-outlined"
                        size={28}
                        color= {theme.pink}
                        />
                    )
                }
                </Pressable>
            )
        })

    },[navigation,route.params?.data, favorite])

    async function handleFavoriteReceipe(receipe){
        if(favorite){
            await removeItem(receipe.id)
            setFavorite(false);

        }else{
            await saveFavorite("@appreceitas",receipe)
            setFavorite(true);
        }
    }


    function handleOpenVideo(){
        setShowVideo(true)
    }
    
    async function shareReceipe(){
        try {
            await Share.share({
                url: 'https://sujeitoprogramdor.com',
                message: `Receita: ${route.params?.data.name}\n
                ${route.params?.data.total_ingredients}\n
                Vi lá nom app receita fácil`
            })
        } catch (error){
            console.log(error);
        }
    }

    return (
        <ScrollView 
            style={styles.container } 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:14}}
        >
            <Pressable onPress={handleOpenVideo}>
                <View style={styles.playIcon}>
                    <AntDesign name="playcircleo" size={44} color={theme.White_04}/>
                </View>
                <Image 
                    source={{uri:route.params?.data.cover}}
                    style={styles.cover}
                />
            </Pressable>


            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <Text style={styles.ingredientsText}>ingredientes ({route.params?.data.total_ingredients})</Text>
                </View>
                <Pressable onPress={shareReceipe}>
                    <Feather name="share-2" size={24} color={theme.Black_01}/>
                </Pressable>
            </View>


            {route.params?.data.ingredients.map((item) => (
                <Ingredients key={item.id} data={item} />
            ))}


            <View style={styles.instructionsArea}>
                <Text style={styles.instructionsText}>Modo de preparo</Text>
                <Feather 
                    name="arrow-down"
                    size={24}
                    color={theme.White_01}
                />
            </View>


            {route.params?.data.instructions.map((item, index) => (
                <Instructions key={item.id} data={item} index={index} />
            ))}


            <Modal visible={showVideo} animationType="slide">
                <VideoView
                    handleClose={ () => setShowVideo(false)}
                    videoUrl={route.params?.data.video}
                />
            </Modal>


        </ScrollView>
    )
}