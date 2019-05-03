import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, } from 'react-native';
import HomeImage from '../assets/img/bg-home.png'
import BtnAdd from './ButtonAdd'
import TextInput from '../Components/TextIpunt'




export default class AdicionarCanhoto extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ImageBackground source={HomeImage} style={{ flex: 1, resizeMode: 'stretch' }}>
                <View style={styles.container}>
                    <TextInput
                        icon='address-card'
                        placeholder='Quem recebeu a entrega ?'
                        value={this.props.value}
                        onChangeText={this.props.onChangeText}
                        autoFocus={true} />
                    <BtnAdd nome='Confirmar' action={this.props.onFetch} />
                    <BtnAdd nome='Cancelar' action={this.props.onCancelar} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
