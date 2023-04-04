import { StyleSheet } from "react-native";
import { theme } from "../../theme/styles";


export const styles = StyleSheet.create({
    logoArea:{
        backgroundColor: theme.green_01,
        alignSelf: 'flex-start',
        padding:8,
        paddingLeft:16,
        paddingRight:16,
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:32,
        marginBottom:8,
    },
    
    logo:{
       fontSize: 18,
       fontWeight: "bold",
       color: theme.White_01 
    }

})