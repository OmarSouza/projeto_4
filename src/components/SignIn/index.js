import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

class SignIn extends React.Component {
    render() {
        return (
            <View style={styles.componentSignIn}>
                <View style={styles.containerSignIn}>
                    <Image source={require('../../assets/logo.png')} style={styles.logoSignIn} />

                    <View style={styles.formSignIn}>
                        <Text style={styles.textSignIn}>Usuario: </Text>
                        <TextInput />

                        <Text style={styles.textSignIn}>Senha: </Text>
                        <TextInput />

                        <View >
                            <TouchableOpacity>
                                <Text>Acessar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    componentSignIn: {
        padding: 50
    },

    containerSignIn: {

    },

    logoSignIn: {

    }
});
export default SignIn;
