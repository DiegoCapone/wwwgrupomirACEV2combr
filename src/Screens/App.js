// import React, { Component } from 'react';
// import { View, AsyncStorage, FlatList, Alert } from 'react-native'
// import ImagePicker from 'react-native-image-picker';

// // import ComponentHome from '../Components/ComponentHome'
// import AddCodeBar from '../Components/AdicionarCodeBar'
// import AdicionarCanhoto from '../Components/AdicionarCanhoto'
// import AdicionarObs from '../Components/AdicionarObs'
// import ComponentEntregas from '../Components/ComponentEntregas'
// import Entregas from '../Components/Entregas'
// import axios from 'axios'
// import moment from 'moment'
// import 'moment/locale/pt-br'
// import ComponentDetalhes from '../Components/ComponentDetalhes'


// const initialState = {
//     codeBar: null,
//     image: null,
//     lat: null,
//     long: null,
//     obs: null,




//     home: true,
//     addCode: false,
//     addCanhoto: false,
//     addObs: false,
//     pageEntregas: false,
//     Detalhes: false

// }

// export default class componentName extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             entregas: [],
//             codeBar: null,
//             image: null,
//             lat: null,
//             long: null,
//             date: moment().format('YYYY[-]MM[-]D'),
//             obs: null,


//             home: true,
//             addCode: false,
//             addCanhoto: false,
//             addObs: false,
//             pageEntregas: false,
//             Detalhes: false

//         };
//     }

//     Detalhes = async (item) => {
//         const data = await item
//         console.log(data)
//         this.props.navigation.navigate('Detalhes', {
//             lat: data.lat,
//             long: data.long,
//             image: data.image
//         })

//     }

//     pickerImage = () => {
//         ImagePicker.showImagePicker({
//             title: 'Escolha a imagem',
//             quality: 0.3,
//             mediaType: "photo",
//             cameraType: "back",
//             allowsEditing: true,
//             maxWidth: 1000,
//             maxHeight: 1000,
//         }, res => {

//             this.setState({ image: { uri: res.uri, base64: res.data } })
//             this.setState({ lat: res.latitude })
//             this.setState({ long: res.longitude })


//         })
//     }

//     valida = () => {
//         if (this.state.obs) {
//             this.Fetch()
//         } else {
//             Alert.alert('Informe quem recebeu a entrega')
//         }
//     }

//     Fetch = async () => {
//         try {

//             const res = await axios.post('http://200.150.166.73:5008/EnviaFoto', {
//                 chave: this.state.codeBar,
//                 foto: this.state.image.base64,
//                 lat: this.state.lat,
//                 long: this.state.long,
//                 obs: this.state.obs,
//                 date: this.state.date,
//                 cpf: '123456789-01',
//                 placa: 'Mir-0055'
//             })
//             // console.log(res.data)



//             const entregas = [...this.state.entregas]
//             entregas.push({
//                 id: Math.random(),
//                 image: this.state.image,
//                 obs: this.state.obs,
//                 date: this.state.date,
//                 lat: this.state.lat,
//                 long: this.state.long,
//                 ...res.data.ttretorno[0]

//             })
//             // console.log(entregas)
//             const status = res.data.ttretorno[0].observacao

//             status == "ACE - Registro concluido com sucesso" ?
//                 await AsyncStorage.setItem('entregas', JSON.stringify(entregas)) : null

//             status == "ACE - Registro concluido com sucesso" ?
//                 Alert.alert(status) :
//                 Alert.alert(status)
//             this.Cancelar()


//         }
//         catch (error) {
//             // console.log(error)
//             Alert.alert('Erro tente novamente!')
//             this.Cancelar()
//         }


//         try {
//             const data = await AsyncStorage.getItem('entregas');
//             const entregas = JSON.parse(data) || []
//             this.setState({ entregas })
//             // console.log(this.state.entregas)

//         } catch (error) {
//             // console.log(error)
//         }

//     }

//     componentDidMount = async () => {
//         await this.loadEntregas()
//     }

//     loadEntregas = async () => {
//         try {
//             const data = await AsyncStorage.getItem('entregas');
//             const entregas = JSON.parse(data) || []
//             this.setState({ entregas })
//             // console.log(this.state.entregas)

//         } catch (error) {
//             // console.log(error)
//         }
//     }

//     Entregas = () => {
//         this.setState({ addCode: false, home: false, addObs: false, addCanhoto: false, pageEntregas: true })
//     }

//     Next = () => {
//         this.setState({ addCode: false, home: false, addObs: true, addCanhoto: false })
//     }

//     Sair = () => {
//         this.props.navigation.navigate('Auth')
//     }

//     Novo = () => {
//         this.setState({ addCode: true, home: false })
//     }

//     Cancelar = () => {
//         this.setState({ ...initialState })
//     }

//     onGetCodeBar = ({ barcodes }) => {
//         if (barcodes[0].data.length == 44) {
//             this.setState({ codeBar: barcodes[0].data, addCanhoto: true, addCode: false })
//         } else {
//             Alert.alert('Quantidade de Digitos inválido')
//             this.Cancelar()
//         }
//         // console.log(barcodes[0].data)
//     }

//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 {this.state.addCode ?
//                     <AddCodeBar
//                         onCancelar={this.Cancelar}
//                         getCodeBar={this.onGetCodeBar} /> : null}

//                 {/* {this.state.home ?
//                     <ComponentHome onNovo={this.Novo} onEntregas={this.Entregas} onSair={this.Sair} /> : null} */}
//                 {this.state.addCanhoto ?
//                     <AdicionarCanhoto
//                         onPickerImage={this.pickerImage}
//                         image={this.state.image}
//                         onCancelar={this.Cancelar}
//                         onNext={this.Next} /> : null}

//                 {this.state.addObs ?
//                     <AdicionarObs
//                         onFetch={this.valida}
//                         onCancelar={this.Cancelar}
//                         value={this.state.obs}
//                         onChangeText={text => this.setState({ obs: text })} /> : null}

//                 {this.state.pageEntregas ?
//                     <ComponentEntregas onVoltar={this.Cancelar}
//                         lista={<FlatList data={this.state.entregas}
//                             keyExtractor={item => `${item.id}`}
//                             renderItem={({ item }) =>
//                                 <Entregas {...item} item={item} onDetalhes={this.Detalhes} />} />} /> : null}


//             </View>

//         );
//     }
// }