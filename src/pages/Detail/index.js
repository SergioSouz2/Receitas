import react, { useLayoutEffect } from "react";
import {View, Text, StyleSheet, Pressable } from 'react-native'
import {styles} from  './styles'
import { theme } from '../../theme/styles'

import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'

export function Detail (){

    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() =>console.log("teste")}>
                    <Entypo 
                        name="heart"
                        size={28}
                        color= {theme.pink}
                    />
                </Pressable>
            )
        })

    },[navigation,route.params?.data])

    return (
        <View style={styles.container}>
            <Text>Pagina Detalhes</Text>
            <Text>{route.params?.data.name}</Text>
        </View>
    )
}