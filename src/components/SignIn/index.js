import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

class SignIn extends React.Component {
    render() {
        return (
            <View style={styles.componentSignIn}>
                <StatusBar style='auto'/>

                <View style={styles.containerSignInLogo}>
                    <Image source={require('../../assets/logo.png')} style={styles.logoSignIn} />
                </View>

                <View style={styles.containerSignInForm}>

                    <View style={styles.formSignIn}>
                        <Text style={styles.textSignIn}>Usuario: </Text>
                        <TextInput 
                        style={styles.inputSignIn}
                        autoComplete={'off'}                        
                        />

                        <Text style={styles.textSignIn}>Senha: </Text>
                        <TextInput style={styles.inputSignIn} autoComplete={'off'} secureTextEntry={true}/>

                        <View style={styles.grupoBotao}>
                            <TouchableOpacity style={styles.botaoSignInAcessar}>
                                <Text>Acessar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botaoSignInCadastrar}>
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
        flex: 1,
        padding: 50
    },

    containerSignInLogo: {
        marginTop: 30,
        alignItems: 'center',
    },

    logoSignIn: {
        width: 230,
        height: 230
    },

    containerSignInForm: {
        padding: 20
    },

    formSignIn: {
        marginTop: 100
    },

    textSignIn: {
        alignSelf: 'stretch',
        fontSize: 20
    },

    inputSignIn: {
        alignSelf: 'stretch',
        height: 30,
        paddingVertical: 1,
        marginTop: 10,
        marginBottom: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        fontSize: 18
    },

    grupoBotao: {
        marginTop: 50,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    botaoSignInAcessar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b78ac',
        height: 45,
        width: 180
    },

    botaoSignInCadastrar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b78ac',
        height: 45,
        width: 180
    },
});
export default SignIn;
