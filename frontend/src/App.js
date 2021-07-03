import { Provider } from 'react-redux'
import AppRouter from './app-router';
import store from "./store";
const App =()=> {
    return (
      <Provider store={store} >
        <AppRouter/>
      </Provider>
    )
  
}
export default App