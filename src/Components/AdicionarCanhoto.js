import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Image, } from 'react-native';
import HomeImage from '../assets/img/bg-home.png'
import BtnAdd from './ButtonAdd'




export default class AdicionarCanhoto extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ImageBackground source={HomeImage} style={{ flex: 1, resizeMode: 'stretch' }}>

                <View style={styles.container}>
                    <View style={styles.containerImg}>
                        {this.props.image ?
                            <Image source={this.props.image} style={styles.image} />
                            : null}
                        <View style={styles.containerButton}>

                            {!this.props.image ?
                                <BtnAdd nome='Adicionar Canhoto' action={this.props.onPickerImage} /> :
                                <BtnAdd nome='Continuar' action={this.props.onNext} />}
                            <BtnAdd nome='Cancelar' action={this.props.onCancelar} />
                        </View>

                    </View>

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
    containerImg: {
        flex: 7,
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
    containerButton: {
        marginLeft: 30
    },
    image: {
        width: '100%',
        height: '75%',
        resizeMode: 'center'
    },
});
