import {PREFER_BLACK_AND_WHITE, LOG_IN, LOG_OUT} from './actions.js'

const defaultUsabilityState = {
    prefersBlackAndWhite: false
}

export const UsabilityReducer = (state = defaultUsabilityState, action) => {
    console.log('The UsabilityReducer has received the dispatched Action')
    switch(action.type) {
        case PREFER_BLACK_AND_WHITE:
            console.log('State has been updated')
            return {...state, prefersBlackAndWhite: !state.prefersBlackAndWhite}
        default: 
            return state
    }
}

const defaultUserState = {
    name: null,
    username: null
}

export const UserReducer = (state = defaultUserState, action) => {
    console.log('The UserReducer has received the dispatched Action')

    switch(action.type) {
        case LOG_IN:
            console.log('State has been updated')
            return {...action.payload}
        case LOG_OUT:
            console.log('State has been updated')
            return defaultUserState
        default:
            return state
    }
}

