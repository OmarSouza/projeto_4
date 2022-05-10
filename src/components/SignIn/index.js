import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

function SignIn({ navigation }) {
    return (
        <View style={styles.componentSignIn}>
            <View style={styles.containerSignIn}>
                <Image source={require('../../assets/logo.png')} style={styles.logoSignIn} />

                <View style={styles.containerInputSignIn}>
                    <Text>User: </Text>
                    <TextInput style={styles.textInputSignIn}/>

                    <Text>Senha: </Text>
                    <TextInput/>
                </View>

                <View style={styles.containerBotaoSignIn}>
                    <TouchableOpacity>
                        <Text>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    componentSignIn: {
        flex: 1
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logoSignIn: {
        marginBottom: 50
    }
});

export default SignIn;
