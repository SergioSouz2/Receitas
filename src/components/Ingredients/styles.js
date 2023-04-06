import {StyleSheet} from 'react-native'
import { theme } from '../../theme/styles'


export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.White_01,
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:12,
        borderRadius: 4,

    },
    name:{
        fontSize: 16,
        fontWeight: '500',
    }

})