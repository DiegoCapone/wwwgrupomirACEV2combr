import { createStore, combineReducers } from 'redux'
import validaCnpj from './reducers/validaCnpj'
import getCodeBar from './reducers/getCodeBar'

const reducers = combineReducers({
    cnpj: validaCnpj,
    codeBar: getCodeBar
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig