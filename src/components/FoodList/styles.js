import { StyleSheet } from 'react-native'
import { theme } from '../../theme/styles'


export const styles = StyleSheet.create({
    container:{
        marginBottom:14,

    },
    cover:{
        width:'100%',
        height:200,
        borderRadius: 10,
    },

    infor:{
        position:"absolute",
        bottom:14,
        left:14,
        zIndex:99,



    },
    name:{
        fontSize:18,
        color:theme.White_01,
        fontWeight:'bold',
    },
    description:{
        color:theme.White_01,

    },

    gradient:{
        position:"absolute",
        left:0,
        right:0,
        bottom:0,
        height: "55%",
        borderRadius: 10,
        zIndex:1,
        backgroundColor:'transparent',


    }
})