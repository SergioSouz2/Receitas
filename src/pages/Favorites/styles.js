import {StyleSheet} from 'react-native'
import { theme } from '../../theme/styles'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.White_02 ,
        paddingStart:14,
        paddingEnd:14,
        paddingTop:36,
    },
    title:{
        color: theme.Black,
        fontSize: 24,
        fontWeight: 'bold',
    }
})