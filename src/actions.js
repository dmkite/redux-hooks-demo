export const PREFER_BLACK_AND_WHITE = 'PREFER_BLACK_AND_WHITE'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export const preferBlackAndWhiteAction = payload => {
    console.log('The preferBlackAndWhiteAction has been dispatched')
    return {
        type: PREFER_BLACK_AND_WHITE,
        payload
    }
}

export const logInAction = payload => {
    console.log('The logInAction has been dispatched')
    return {
        type: LOG_IN,
        payload
    }
}

export const logOutAction = () => {
    console.log('The logOutAction has been dispatched')
    return {type: LOG_OUT}
}