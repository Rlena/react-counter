// action Creator 
// должна вернуть объект action c type
import { ADD, ADD2, ADD_NUMBER, SUB } from "./actionTypes";

export function add() {
  return {
    type: ADD
  }
}

export function sub() {
  return {
    type: SUB
  }
}

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    payload: number
  }
}

export function asyncAdd(number) {
  // благодаря тому, что подключен middleware redux-thunk, можем вернуть новую функцию,
  // которая принимает параметр dispatch и далее мы можем запускать асинхронный код
  return (dispatch) => {
    setTimeout(() => {
      // в dispatch передаем action creator
      dispatch(addNumber(number))
    }, 3000)
  }
}

export function add2(number) {
  return {
    type: ADD2,
    payload: number
  }
}