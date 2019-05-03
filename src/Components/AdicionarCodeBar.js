import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, } from 'react-native';
import { RNCamera } from 'react-native-camera';
import HomeImage from '../assets/img/bg-home.png'
import BtnAdd from './ButtonAdd'

export default class AdicionarCodeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            camera: false
        }
    }


    onCamera = () => this.setState({ camera: true })
    ofCamera = () => this.setState({ camera: false })



    render() {
        return (
            <ImageBackground source={HomeImage} style={{ flex: 1, resizeMode: 'stretch' }}>
                <View style={styles.container}>
                    {this.state.camera ? <View style={styles.containerCamera}>
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            onGoogleVisionBarcodesDetected={({ barcodes }) =>
                                this.props.getCodeBar({ barcodes })}
                        />
                        <View style={styles.ButtonCamera}>
                            <BtnAdd nome='Cancelar' action={this.ofCamera} />
                        </View>
                    </View> : null}
                    {!this.state.camera ?
                        <View style={styles.containerButton}>
                            <BtnAdd nome='Adicionar Código de Barras' action={this.onCamera} />
                            <BtnAdd nome='Cancelar' action={this.props.onCancelar} />
                        </View> : null}
                </View>
            </ImageBackground>

        );
    }

}

const styles = StyleSheet.create({
    containerCamera: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    ButtonCamera: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 20,
    }
});