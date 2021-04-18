import ReactDOM from 'react-dom';
import App from './App';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {Provider} from "react-redux";
import {createStore} from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.value;
        case 'DECREMENT':
            return state - action.value;
        case 'RESET':
            return 0;
        default:
            return state
    }
}

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,document.getElementById('root')
);

