import { StyleSheet } from "react-native";
import { theme } from "../../theme/styles";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',

    },
    backButton:{
        width:'100%',
        backgroundColor:theme.green_02,
        height:48,
        flexDirection:"row",
        alignItems:"center",
        paddingStart:14,
        marginTop:8,
    },
    backText:{
        color: theme.White_01,
        fontSize:18,
        fontWeight:'500',
        marginLeft:14,


    },
    webView:{
        flex:1,
        width:'100%'
    }
})