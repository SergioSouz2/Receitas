import {StyleSheet} from 'react-native'
import { theme } from '../../theme/styles'


export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.White_02,
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart:14,

    },
    cover:{
        height:200,
        borderRadius:14,
        width:"100%",
    },
    playIcon:{
        position:"absolute",
        zIndex:9,
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent:"center",
        alignItems:"center"
    },
    headerDetails:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:14,

    },
    title:{
        fontSize: 18,
        marginTop:14,
        fontWeight:'bold',
        color: theme.Black,
        marginBottom:4,
    },
    ingredientsText:{
        marginBottom:14,
        fontSize:16,
    },


    instructionsArea:{
        backgroundColor: theme.green_01,
        flexDirection:'row',
        padding:8,
        borderRadius:4,
        marginBottom:14,
    },
    instructionsText:{
        fontSize: 18,
        fontWeight:'500',
        color: theme.White_01,
        marginRight:8,
    }
})