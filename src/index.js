import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/rootReducer'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'

// redux devtools
// в функцию composeEnhancers необходимо обернуть весь Middleware
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


// функция, кот. при изменении store в redux будет выводить изменения в консоль
const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState());
  return result
}

// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       const result = next(action)
//       console.log('Middleware', store.getState());
//       return result
//     }
//   }
// }

// создаем store
// в createStore необходимо передать reducer
// создали в отдельной директории rootReducer
// 2 параметр - applyMiddleware, в нем мы перечисляем набор middleware, кот. хотим использовать
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  loggerMiddleware,
  reduxThunk
)))

// сообщаем приложению, что теперь мы работаем с redux
// передаем в Provider store
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
