const prefix = 'Trade_'

const defaultConfigure = {
    
}

export default (state = defaultConfigure, action) => {
    switch (action.type) {
        case `${prefix}changeFieldValue`: {
            return {
                ...state,
                [action.field]: action.value
            }
        }
        default: {
            return state
        }
    }
}