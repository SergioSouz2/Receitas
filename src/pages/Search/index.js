import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native'
import {View, Text, StyleSheet, FlatList } from 'react-native'

import api from '../../services/api'
import { Foodlist } from '../../components/FoodList'

import {styles} from  './styles'

export function Search (){
    const route  = useRoute();
    const [receipes, setReceipes]= useState([])

    useEffect(() =>{
        async function fetchReceipes(){
            const response = await api.get(`/foods?name_like=${route.params?.name}`)
            setReceipes(response.data)
        }

        fetchReceipes()

    }, [route.params?.name])

    return (
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={receipes}
            keyExtractor={item => String(item.id) }
            renderItem={({item})=> <Foodlist data={item}/>}
            ListEmptyComponent={() => <Text>Não encontramos o que está buscando...</Text>}
            />
        </View>
    )
}