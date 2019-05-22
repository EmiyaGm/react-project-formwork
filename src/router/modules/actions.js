import { post, gpost } from '../../utils/uaxios';
import { delCookie, userCookieKey as cookieKey } from '../../utils/browser';

const prefix = 'Router_'

export const initIronman = (data, cbs) => (dispatch, getState) => {

    const reqMessage = {...data}

    dispatch({
        type: `${prefix}initIronman`,
        data: reqMessage
    })
}