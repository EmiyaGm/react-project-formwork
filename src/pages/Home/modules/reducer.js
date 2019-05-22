import {
    getCookie,
    userCookieKey as cookieKey
  } from '../../../utils/browser';

const prefix = 'Home_'

const defaultConfigure = {
    logInfo: getCookie(cookieKey) ? JSON.parse(getCookie(cookieKey)) : {}
}

export default (state = defaultConfigure, action) => {
    switch (action.type) {
        case `${prefix}changeFieldValue`: {
            return {
                ...state,
                [action.field]: action.value
            }
        }
        case `${prefix}login`: {
            return {
                ...state,
                logInfo: {
                    ...action.data
                }
            }
        }
        case `${prefix}logout`: {
            return {
                ...state,
                logInfo: {}
            }
        }
        default: {
            return state
        }
    }
}