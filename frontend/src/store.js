import  {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import PromiseMW from 'redux-promise'

const createWithMW = applyMiddleware(PromiseMW)(createStore)
const store = createWithMW(rootReducer)
export default store