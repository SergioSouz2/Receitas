import {StyleSheet} from 'react-native';
import { theme } from '../../theme/styles';




export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.White_02,
        paddingTop:36,
        paddingStart:14,
        paddingEnd:14,

    },
    title:{
        fontSize: 26,
        fontWeight:'bold',
        color: theme.Black_01,
        
    },
    form:{
        backgroundColor:theme.White_01,
        width:"100%",
        borderRadius:8,
        marginTop:16,
        marginTop:16,
        borderWidth:1,
        borderColor:theme.White_03,
        paddingLeft:8,
        paddingRight:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    input:{
        width:'90%',
        maxWidth:'90%',
        height:54,
    }
})