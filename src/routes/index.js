import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'


import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'
import { theme } from '../theme/styles' 


const Tab =  createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard:true,
                tabBarShowLabel:false,
                tabBarActiveTintColor: "#000000",
                tabBarStyle:{
                    backgroundColor: '#FFF',
                    borderTopWidth:0,
                }

            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon:({color, size, focused}) => {
                        if(focused){
                            return<Ionicons name= "home" color={theme.Black} size={size}/>
                        }
                        return  <Ionicons name= "home-outline" color={color} size={size}/>
                           
                    }
                }}
            />
            
            <Tab.Screen 
                name="Favorites"   
                component={Favorites}
                options={{
                    tabBarIcon:({color, size, focused}) => {
                        if(focused){
                            return<Ionicons name= "heart" color={theme.pink} size={size}/>
                        }
                        return  <Ionicons name= "heart-outline" color={color} size={size}/>
                           
                    }
                }} 
            />
        </Tab.Navigator>
    )
}