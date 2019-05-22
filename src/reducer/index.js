import { combineReducers } from 'redux'
import router from '../router/modules/reducer'
import home from '../pages/Home/modules/reducer'
import trade from '../pages/Trades/modules/reducer'
import users from '../pages/Users/modules/reducer'

export default combineReducers({
    router,
    home,
    trade,
    users
})
