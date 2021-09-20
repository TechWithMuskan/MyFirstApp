import React from 'react';
import ScrollComponent from '../components/organisms/ScrollComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../components/atoms/product';

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={ScrollComponent}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                    name="Product"
                    component={Product}
                    options={{ title: 'Product' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ScreenNavigation;