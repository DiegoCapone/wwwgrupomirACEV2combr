import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import HomeImage from '../assets/img/bg-home.png'
import BtnAdd from '../Components/ButtonAdd'
import TextInput from '../Components/TextIpunt'
import Styles from '../Components/StylesPattern'
import axios from 'axios'

export default class Auth extends Component {
    constructor(props) {
        super(props);
    }

    GeraToken = async () => {
        try {
            const res = await axios.get('http://200.150.166.73:5008/GeraToken', {
                auth: {
                    username: 'capao',
                    password: 'capao'
                }
            })
            console.log(res.data.Token)
            axios.defaults.headers.common['token']
                = `${res.data.Token}`
            this.props.navigation.navigate('App')

        } catch (err) {
            console.log(err)
        }

    }

    render() {
        return (
            <ImageBackground source={HomeImage} style={{ flex: 1, resizeMode: 'stretch' }}>
                <View style={styles.containerBar}>
                    <Text style={styles.title}>ACE</Text>
                    <Text style={styles.subTitle}>Aplicativo de Canhoto Eletronico</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        icon='truck'
                        placeholder='Placa ?'
                        value='MIR-0055'
                        editable={false} style={{ marginBottom: 5 }} />
                    <TextInput
                        icon='address-card'
                        placeholder='CPF ?'
                        value='123456789-01'
                        editable={false} />
                    <BtnAdd nome='Login' action={this.GeraToken} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    containerBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        color: Styles.cor.branco,
        fontSize: Styles.size.grande,
    },
    subTitle: {
        color: Styles.cor.branco,
        fontSize: Styles.size.medio,


    }
});
