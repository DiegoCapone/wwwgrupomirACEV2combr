import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ButtonHomeMenu from './src/Components/ButtonHomeMenu'
import Styles from './src/Components/StylesPattern'




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonHomeMenu title='Novo' icon='truck' />
        <ButtonHomeMenu title='Entregas' icon='map-marked-alt' />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
});
