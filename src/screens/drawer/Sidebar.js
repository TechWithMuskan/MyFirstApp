import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import About from './About';
import Privacy from './Privacy';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    key='home'
                    name='Home'
                    component={Home} />
                <Drawer.Screen
                    key='about'
                    name='About'
                    component={About} />
                <Drawer.Screen
                    key='privacy'
                    name='Privacy'
                    component={Privacy} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Sidebar;
