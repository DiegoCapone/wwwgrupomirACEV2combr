/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import MainNavigator from './src/Navigation';
import Entrega from './src/Components/ComponentEntregas'
import ComponentDetalhes from './src/Components/ComponentDetalhes'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MainNavigator);
