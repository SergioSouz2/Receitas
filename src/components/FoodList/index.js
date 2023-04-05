import React from "react";
import { View, TouchableOpacity, Image, Text} from 'react-native'
import { styles} from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../theme/styles";
import {useNavigation} from '@react-navigation/native'


export function Foodlist({data}){

    const navigation = useNavigation();

    function handleNavigate(){
        navigation.navigate("Detail",{data:data});
    }
    return(
        <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.container}
            onPress={handleNavigate}    
        >

            <Image 
                source={{ uri: data.cover }} 
                style={styles.cover}
            />
            <View style={styles.infor}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.description}>{data.total_ingredients } ingredientes | {data.time}</Text>

            </View>

            <LinearGradient style={styles.gradient} colors={theme.gradientFood} />

        </TouchableOpacity>
    )
}