import * as React from 'react';
import { View, Text, Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/SearchScreen';

//Screen names
const homeName='Gymbros'
const ProfileName='Profile'
const SearchName='Search'

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={homeName}
                
                screenOptions={({route}) => ({
                    tabBarIcon:({focused, color, size}) => {
                        let iconName;
                        let routeName=route.name;

                        if(routeName===homeName){
                            iconName = focused ? 'list' : 'list-outline'
                        }else if(routeName===SearchName){
                            iconName = focused ? 'search' : 'search-outline'
                        }else if(routeName===ProfileName){
                            iconName = focused ? 'settings' : 'settings-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}
                
                >
            
                <Tab.Screen name={homeName}/**/ component={HomeScreen}/>
                <Tab.Screen name={SearchName}/**/ component={SearchScreen}/>
                <Tab.Screen name={ProfileName}/**/ component={ProfileScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}