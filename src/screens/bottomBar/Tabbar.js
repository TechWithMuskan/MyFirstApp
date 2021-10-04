import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Article from './Article';
import Chat from './Chat';
import Contact from './Contact';
import Album from './Album';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Tabbar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName;

                        if (route.name == 'Article') {
                            iconName = 'article'
                        } else if (route.name == 'Chat') {
                            iconName = 'chat-bubble'
                        } else if (route.name == 'Contact') {
                            iconName = 'contacts'
                        } else {
                            iconName = 'photo-album'
                        }

                        return <Icon name={iconName} size={25} color={color} />
                    }
                })}>
                <Tab.Screen name="Article" component={Article} />
                <Tab.Screen name="Chat" component={Chat} />
                <Tab.Screen name="Contact" component={Contact} />
                <Tab.Screen name="Album" component={Album} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabbar;
