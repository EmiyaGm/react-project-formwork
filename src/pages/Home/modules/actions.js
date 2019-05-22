import { delCookie, userCookieKey as cookieKey } from '../../../utils/browser';

const prefix = `Home_`
export const logout = (data, cbs) => (dispatch, getState) => {
    // let successCb = null
    // let failCb = null

    // if (!!cbs) {
    //     successCb = cbs.successCb
    //     failCb = cbs.failCb
    // }

    // let reqMessage = {}

    dispatch({
        type: `${prefix}logout`
    })
    delCookie(cookieKey)
    window.location.href = '/'

}