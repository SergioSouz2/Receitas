import { Text, SafeAreaView, TouchableOpacity } from "react-native";

import {Feather} from "@expo/vector-icons"
import { WebView } from 'react-native-webview'
 

import { styles } from "./styles";
import { theme } from "../../theme/styles";

export function VideoView({handleClose,videoUrl}){
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleClose} style={styles.backButton}>
                <Feather  name="arrow-left" size={24}  color={theme.White_01}/>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>


            <WebView
                style={styles.webView}
                source={{ uri: videoUrl }}
            />
        </SafeAreaView>
    )
}