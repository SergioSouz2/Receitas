import { View, Text } from "react-native";

import {styles} from './styles.js';

export function Ingredients({data}){
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text>{data.amount}</Text>
        </View>
    )
}