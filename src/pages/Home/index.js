import react, { useState } from "react";

import { Ionicons } from '@expo/vector-icons'

import {View, Text, SafeAreaView, TextInput, TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native'

import { Logo } from '../../components/Logo'

import { styles } from  './styles'
import { theme } from "../../theme/styles";



export function Home (){

    const [ inputValue, setInputValue] = useState('')

    function handleSearch(){
        console.log('vc digitou')
        console.log(inputValue)

    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Logo/>
                <Text style={styles.title}>Encontre a receita</Text>
                <Text style={styles.title}>que combina com você</Text>

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
            </SafeAreaView>
        </TouchableWithoutFeedback>

    )
}