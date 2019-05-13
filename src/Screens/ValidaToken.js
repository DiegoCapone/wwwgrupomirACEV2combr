import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Alert } from 'react-native';
import HomeImage from '../assets/img/bg-home.png'
import BtnAdd from '../Components/ButtonAdd'
import TextInput from '../Components/TextIpunt'
import { connect } from 'react-redux'
import { validaCnpj } from '../store/actions/validaCnpj'
import axios from 'axios'





class ValidaToken extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnpj: '',
            token: null
        }
    }

    ValidaCNPJ = async () => {
        if (!this.state.cnpj) {
            return Alert.alert('CNPJ invalido')
        }

        if (this.state.cnpj.length != 14) {
            return Alert.alert('CNPJ invalido')
        }

        try {
            const res = await axios.post('http://10.0.0.79:3000/GeraToken', {
                cnpj: this.state.cnpj
            })

            this.setState({ token: res.data.token })

            if (this.state.token) {
                this.props.onValidaCnpj({ ...this.state })
                this.props.navigation.navigate('Auth')
            }
        } catch (error) {
            return Alert.alert('CNPJ invalido')
        }
    }

    render() {
        return (
            <ImageBackground source={HomeImage} style={{ flex: 1, resizeMode: 'stretch' }}>
                <View style={styles.container}>
                    <TextInput
                        icon='address-card'
                        placeholder='CNPJ'
                        value={this.props.value}
                        maxLength={14}
                        keyboardType='number-pad'
                        onChangeText={cnpj => this.setState({ cnpj: cnpj })}
                    />
                    <BtnAdd nome='Confirmar' action={this.ValidaCNPJ} />
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

const mapStateToProps = ({ cnpj }) => {
    return {
        cnpj: cnpj.cnpj,
        token: cnpj.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onValidaCnpj: cnpj => dispatch(validaCnpj(cnpj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValidaToken)
