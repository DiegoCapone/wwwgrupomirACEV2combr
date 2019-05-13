import { LOAD_ENTREGAS } from './actionTypes'

export const loadEntregas = entregas => {
    return {
        type: LOAD_ENTREGAS,
        payload: entregas

    }
}