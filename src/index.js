import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import rootReducer from './redux/rootReducer'
import {Provider} from 'react-redux'

// создаем store
// в createStore необходимо передать reducer
// создали в отдельной директории rootReducer
const store = createStore(rootReducer)

// сообщаем приложению, что теперь мы работаем с redux
// передаем в Provider store
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
