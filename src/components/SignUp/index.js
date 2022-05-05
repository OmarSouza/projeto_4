import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

function SignUp({ navigation }) {
    return (
        <View>
            <Text>Sing In Screen</Text>
            <Button
                title='Home'
                onPress={() => navigation.navigate('')}  
            />
        </View>
    );
}

export default SignUp;