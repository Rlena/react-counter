import { ADD, ADD_NUMBER, SUB } from "../actions/actionTypes";

const initialState = {
  counter: 0
}

export default function counter1(state = initialState, action) {

  // важное правило reducer - вернут новый объект
  // redux реагирует на изменения только, когда меняется указатель на объект
  // необходимо склонировать предыдущее состояние
  switch(action.type) {
    case ADD:
      return {
        counter: state.counter + 1
      }
    case SUB:
      return {
        counter: state.counter - 1
      }
    case ADD_NUMBER:
      return {
        // в action хранится объект payload, где хранится нужное нам число
        counter: state.counter + action.payload
      }

    default:
      return state
  }
}