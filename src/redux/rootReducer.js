// combineReducers позволяет объединить несколько redusers,
// вернет 1 новый reducer, кот. будет состоять из всех, кот. мы перечислим тут
import {combineReducers} from 'redux'

import counter1 from './reducers/counter1'
import counter2 from './reducers/counter2'

// тут идет объединение redusers, для передачи в store index.js
// в combineReducers нужно передавать объект и именованные поля state
export default combineReducers({
  // ключ/значение совпадают
  counter1, counter2
})