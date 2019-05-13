import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import ComponentEntregas from '../Components/ComponentEntregas'
import FinalizadaCanhoto from '../Components/FinalizadaCanhoto'

initialState = {
    entregas: []
}

export default class ComCanhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entregas: []
        };
    }

    Detalhes = async (item) => {
        const data = await item
        this.props.navigation.navigate('DetalhesCanhoto', { ...data })
        console.log('Data', data)
    }

    Voltar = () => {
        this.setState({ initialState })
        this.props.navigation.navigate('Home')
    }

    componentDidMount = async () => {
        await this.getEntregas()
        console.log(this.state.entregas)
    }

    getEntregas = async () => {
        const entregas = []
        await AsyncStorage.getAllKeys((error, keys) => {
            return AsyncStorage.multiGet(keys, (error, result) => {
                result.forEach(([key, val]) => {
                    entregas.push(JSON.parse(val));
                    console.log('Entregas', entregas)
                    this.setState({ entregas })
                })
            })
        });
    }

    render() {
        const { entregas } = this.state;
        const Filter = entregas.filter(e => e.canhoto)
        return (

            <ComponentEntregas onVoltar={this.Voltar}
                lista={
                    <FlatList data={Filter}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) =>
                            <FinalizadaCanhoto {...item} item={item} onDetalhes={this.Detalhes} />
                        } />
                } />

        );
    }
}

