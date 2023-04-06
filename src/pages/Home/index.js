import { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {Text as MotiText } from 'moti'

import {
    View, 
    Text, 
    SafeAreaView, 
    TextInput, 
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard ,
    FlatList,
} from 'react-native'

import { Logo } from '../../components/Logo'
import { Foodlist } from '../../components/FoodList'

import { api } from '../../services/api'

import { styles } from  './styles'
import { theme } from "../../theme/styles";



export function Home (){
    const navigation = useNavigation()

    const [ inputValue, setInputValue] = useState('')
    const [ foods, setFoods] = useState([])

    useEffect(() => {
        async function fetchApi(){
            const response = await api.get("/foods")

            setFoods(response.data)
        }
        

        fetchApi();

    },[])

    function handleSearch(){
      if(!inputValue ) return;

      let input = inputValue;
      setInputValue('')
      navigation.navigate("Search", { name:input } )
    }



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Logo/>
                <MotiText 
                    style={styles.title}
                    from={{
                        opacity:0,
                        translateY: 15,
                    }}
                    animate={{
                        opacity:1,
                        translateY: 0,
                    }}
                    transition={{
                        delay:150,
                        type:'timing',
                        duration: 650,
                    }}
                >
                    Encontre a receita
                </MotiText>

                <MotiText 
                    style={styles.title}
                    from={{
                        opacity:0,
                        translateY: 15,
                    }}
                    animate={{
                        opacity:1,
                        translateY: 0,
                    }}
                    transition={{
                        delay:250,
                        type:'timing',
                        duration: 850,
                    }}
                >
                    que combina com você
                </MotiText>

                <View style={styles.form}>
                    <TextInput 
                        style={styles.input} 
                        value={inputValue}
                        onChangeText={ (text) => setInputValue(text) }
                        placeholder="Digite o nome da receita" 
                    />

                    <TouchableOpacity onPress={handleSearch}>
                        <Ionicons name="search" size={28} color={theme.green_01}/>
                    </TouchableOpacity>
                </View>

                <FlatList 
                    data={foods}
                    keyExtractor={(item)=> String(item.id)}
                    renderItem={({item}) => <Foodlist data={item}/>}
                    showsVerticalScrollIndicator= {false}
                        
                />

            </SafeAreaView>
        </TouchableWithoutFeedback>

    )
}