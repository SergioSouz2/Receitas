import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native' 

import { Foodlist } from '../../components/FoodList'

import { getFavorites } from '../../utils/storage' 

import {styles} from  './styles'


export function Favorites (){

    const [receipes, setreceipes]= useState([])
    const isFocused = useIsFocused()

    useEffect(() => {
        let isActive = true;

        async function getReceipes(){
           const result =await getFavorites('@appreceitas') 
           if(isActive){
            setreceipes(result)
           }
           console.log(result);
        }
        if(isActive){
            getReceipes()
        }

        return() =>{
            isActive = false;
        }
    },[isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <Text  style={styles.title}>Receitas Favoritas</Text>

            {receipes.length === 0  && (
                <Text> Você não tem nenhuma receita salva.</Text>
            )}

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={receipes}
                keyExtractor={item => String(item.id) }
                renderItem={({item})=> <Foodlist data={item}/>}
            />

        </SafeAreaView>
    )
}