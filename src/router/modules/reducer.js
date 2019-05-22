const prefix = 'Router_'

const defaultConfigure = {
    ironmanObj: null,
}

export default (state = {
    ...defaultConfigure
}, action) => {

    switch (action.type) {
        case `${prefix}destroy`:
            {
                return {
                    ...state,
                    ironmanObj: null,
                }
            }
        case `${prefix}changeFieldValue`:
            {
                return {
                    ...state,
                    [action.data.field]: action.data.value
                }
            }
        case `${prefix}initIronman`:
        {
            return {
                ...state,
                ironmanObj: {
                    ...action.data
                }
            }
        }
        default:
            {
                return state
            }
    }
}