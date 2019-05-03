import React from 'react'
import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'

import Auth from './Screens/Auth'
import App from './Screens/App'
import Detalhes from './Components/ComponentDetalhes'


const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    App: {
        name: 'App',
        screen: App
    },
    Detalhes: {
        name: 'Detalhes',
        screen: Detalhes
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(MainNavigator);


export default AppContainer;