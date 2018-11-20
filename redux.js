const redux = require('redux')

// объект, описывающий состояние всего приложения
const initialState = {
  counter: 0
}

// по умолчанию state = initialState
// Reducer - js-функция, описывает действия
// reducer всегда возвращает новый state, обрабатывает Action
// в reducer описали начальное состояние,
// далее если попадает некоторый action с пом. ф-ции dispatch, будем проверять action.type
// при выполнении условия модифицируем state, на основае предыдущего состояния
// вернем новый state
const reducer = (state = initialState, action) => {

  if (action.type === 'ADD') {
    return {
      // counter переопределяем из предыдущего значения + 1
      counter: state.counter + 1
    }
  }

  if (action.type === 'SUB') {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === 'ADD_NUMBER') {
    return {
      counter: state.counter + action.value
    }
  }

  return state

}

// Store - место, где хранятся все данные
// метод getState() харанит текущее состояние store
// stоre передаем функцию (reducer), кот. изменяет store
const store = redux.createStore(reducer)

// подписка на изменения store
// при любом изменении store, мы будем попадать в данную функцию и получать актуальный state
store.subscribe(() => {
  console.log('Subscribe', store.getState())
})

// Actions предназначен для изменения Store
// type - обязательное поле, определяет какое именно действие мы совершаем
const addCounter = {
  type: 'ADD'
}

// в dispatch передаем action
// в store есть метод dispatch, в котором мы можем диспатчить новые action
store.dispatch(addCounter)

store.dispatch({ type: 'SUB'})

// данный объект мы получаем в reducer как параметр action
store.dispatch({ type: 'ADD_NUMBER', value: 10 })

