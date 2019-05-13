import React, { Component } from 'react';
import { FlatList, AsyncStorage, Alert } from 'react-native';
import ComponentEntregas from '../Components/ComponentEntregas'
import SemCanhoto from '../Components/SemCanhoto'
import moment from 'moment'
import 'moment/locale/pt-br'

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

    // finalizarCanhoto = async () => {

    //     if (!this.state.obs) {
    //         return Alert.alert('Informe quem recebeu a entrega')
    //     }

    //     if (!this.state.lat && !this.state.long) {
    //         this.stateInitial()
    //         this.props.navigation.navigate('Home')
    //         return Alert.alert('Error')
    //     }

    //     const res = await axios.post('http://200.150.166.73:5008/EnviaFoto', {
    //         foto: this.state.image.base64,
    //         lat: this.state.lat,
    //         long: this.state.long,
    //         obs: this.state.obs,
    //         date: moment().format('YYYY[-]MM[-]D'),
    //         cpf: '123456789-01',
    //         placa: 'Mir-0055',
    //         chave: this.state.entrega.chavenfe
    //     })
    //     // 
    //     console.log(res.data)
    //     const status = res.data.ttretorno[0].observacao
    //     const statusTrue = "ACE - Registro concluido com sucesso"

    //     if (status == statusTrue) {
    //         this.updateItem()
    //     } else {
    //         Alert.alert('Erro no request')

    //     }


    // }

    VoltarPendente = async (item) => {
        console.log('upadteitem')
        const itemUpdate = {
            canhoto: false,
            finalizada: false,
            date: moment().format('YYYY[-]MM[-]D')
        }

        try {
            const id = item.id
            await AsyncStorage.mergeItem(`${id}`, JSON.stringify(itemUpdate))
            this.props.navigation.navigate('Home')
            return Alert.alert('Entrega com status Pendente.')
        } catch (err) {
            this.props.navigation.navigate('Home')
            return Alert.alert('Erro.')
            console.log(err)
        }
    }

    Detalhes = async (item) => {
        const data = await item
        this.props.navigation.navigate('DetalhesSemCanhoto', { ...data })
        console.log(data)
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
        const Filter = entregas.filter(e => !e.canhoto && e.finalizada)
        return (

            <ComponentEntregas onVoltar={this.Voltar}
                lista={
                    <FlatList data={Filter}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) =>
                            <SemCanhoto {...item} obs={item.nome} item={item} onDetalhes={this.Detalhes} canhoto={this.VoltarPendente} />
                        } />
                } />

        );
    }
}

