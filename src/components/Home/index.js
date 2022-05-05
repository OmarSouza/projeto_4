import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

function Home({ navigation }) {
    return (
        <View>
            <Text>Sing In Screen</Text>
            <Button
                title='Home'
                onPress={() => navigation.navigate('')}  
            />
            <Button
                title='SignUp'
                onPress={() => navigation.navigate('SignUp')}  
            />
        </View>
    );
}

export default Home;