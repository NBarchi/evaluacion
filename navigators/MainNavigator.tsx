import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import BienvenidaScreen from "../screens/BienvenidaScreen";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";


/// Stack 

const Stack = createStackNavigator()
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Bienvenida" component={BienvenidaScreen} options={{headerShown:false}}/>
            <Stack.Screen name="BottomTab" component={MyTabs} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}



///Bottom Tab

const Tab = createBottomTabNavigator()
function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Screen1" component={Screen1}/>
            <Tab.Screen name="Screen2" component={Screen2}/>
            <Tab.Screen name="Screen3" component={Screen3}/>
            <Tab.Screen name="Screen4" component={Screen4}/>
        </Tab.Navigator>
    )
}


export default function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}