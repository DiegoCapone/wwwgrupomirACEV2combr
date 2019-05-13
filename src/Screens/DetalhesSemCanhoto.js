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
        this.props.navigation.navigate('SemCanhoto')
    }

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.containerDetalhes}>
                    <Text>Chave: {this.props.navigation.getParam('chavenfe')}</Text>
                    <Text>Data: {this.props.navigation.getParam('date')}</Text>
                    <Text>Estabelecimento: {this.props.navigation.getParam('estab')}</Text>
                    <Text>Nota Fiscal: {this.props.navigation.getParam('notafiscal')}</Text>
                    <Text>Status NFE: {this.props.navigation.getParam('statusnfe')}</Text>
                    <Text>Serie: {this.props.navigation.getParam('serie')}</Text>
                    <Text>Destinatario: {this.props.navigation.getParam('nome')}</Text>
                    <Text>Contato: {this.props.navigation.getParam('telefone')}</Text>
                    <Text>RG: {this.props.navigation.getParam('rg')}</Text>
                    <Text>Status: {'Fianalizada Sem Canhoto'}</Text>
                </View>
                {/* <View style={styles.btn}>
                    <Button
                        onPress={() => { Linking.openURL('https://maps.google.com/maps?q=loc:' + long + ',' + lat + '&z=11') }}
                        title="Localização"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View> */}
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
