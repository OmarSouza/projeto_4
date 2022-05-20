import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

function SignUp({ navigation }) {
    return (
        <View style={styles.componentSignUp}>
            <StatusBar style='auto' />

            <View style={styles.containerSignUpLogo}>
                <Image source={require('../../assets/logo.png')} style={styles.logoSignUp} />
            </View>

            <View style={styles.containerSignUpForm}>

                <View style={styles.formSignUp}>
                    <Text style={styles.textSignUp}>Nome Completo: </Text>
                    <TextInput style={styles.inputSignUp} autoComplete={'off'} />

                    <Text style={styles.textSignUp}>Usuario: </Text>
                    <TextInput style={styles.inputSignUp} autoComplete={'off'} />

                    <Text style={styles.textSignUp}>Tipo de Alimentação: </Text>
                    <TextInput style={styles.inputSignUp} autoComplete={'off'} />


                    <Text style={styles.textSignUp}>Senha: </Text>
                    <TextInput style={styles.inputSignUp} autoComplete={'off'} secureTextEntry={true} />

                    <View style={styles.grupoBotao}>
                        <TouchableOpacity style={styles.botaoSignUpAcessar} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.textBtn}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoSignUpCadastrar} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.textBtn}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    componentSignUp: {
        flex: 1,
        padding: 50
    },

    containerSignUpLogo: {
        marginTop: 30,
        alignItems: 'center',
    },

    logoSignUp: {
        width: 230,
        height: 230
    },

    containerSignUpForm: {
        padding: 20
    },

    formSignUp: {
        marginTop: 100
    },

    textSignUp: {
        alignSelf: 'stretch',
        fontSize: 20
    },

    inputSignUp: {
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

    botaoSignUpAcessar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b78ac',
        height: 45,
        width: 180,
        borderRadius: 10,
    },

    botaoSignUpCadastrar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e20c0c',
        height: 45,
        width: 180,
        borderRadius: 10
    },

    textBtn: {
        fontSize: 20,
        color: '#FFF'
    },
});

export default SignUp;