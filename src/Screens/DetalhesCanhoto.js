import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native';
import BtnSair from '../Components/ButtonSair'


export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    Voltar = () => {
        this.props.navigation.navigate('Canhoto')
    }

    render() {

        const long = this.props.navigation.getParam('long')
        const lat = this.props.navigation.getParam('lat')


        return (

            <View style={styles.container}>
                <Image source={this.props.navigation.getParam('image')} style={styles.image} />
                <View style={styles.containerDetalhes}>
                    <Text>Chave: {this.props.navigation.getParam('chavenfe')}</Text>
                    <Text>Data: {this.props.navigation.getParam('date')}</Text>
                    <Text>Estabelecimento: {this.props.navigation.getParam('estab')}</Text>
                    <Text>Nota Fiscal: {this.props.navigation.getParam('notafiscal')}</Text>
                    <Text>Status NFE: {this.props.navigation.getParam('statusnfe')}</Text>
                    <Text>Serie: {this.props.navigation.getParam('serie')}</Text>
                    <Text>Destinatario: {this.props.navigation.getParam('obs')}</Text>
                    <Text>Status: {'Fianalizada Com Canhoto'}</Text>
                </View>
                <View style={styles.btn}>
                    <Button
                        onPress={() => { Linking.openURL('https://maps.google.com/maps?q=loc:' + lat + ',' + long + '&z=11') }}
                        title="Localização"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={styles.containerBtnSair}>
                    <BtnSair nome='Voltar' action={this.Voltar} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        alignItems: 'center',

    },
    image: {
        resizeMode: 'stretch',
        width: '90%',
        height: 200,
        margin: 20,
    },
    btn: {
        width: 200,
        height: 20,
        marginTop: 10,
        borderRadius: 20,
    },
    containerDetalhes: {
        margin: 10
    },
    containerBtnSair: {
        marginTop: 10
    }

});
