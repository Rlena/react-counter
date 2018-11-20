import React, {Component} from 'react'
import './App.scss'
import {connect} from 'react-redux'
import Counter from './Counter'
import { add, addNumber, sub, asyncAdd } from "./redux/actions/actions";

class App extends Component {

  render() {
    // console.log('APP', this.props)
    return (
      // данный компонент ничего не знает про состоние state
      // он обращается к нек. параметрам, кот. ему передали и выводит их на экран
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        {/* также данный компонент ничего не знает про логику приложения,
        а просто выполняет нек. методы при клике */}
        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        {/* если в функцию нужно передать параметры, то прописывается через стрелочную */}
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Вычесть 17</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>
            Асинхронно добавить 100
          </button>
        </div>

        <Counter />
      </div>
    )
  }
}

// общий state приложения, на данный момент это initialState из rootReducer
// вернет новый js-объект, в нем будут трансформированы данные из state,
// чтобы использовать их далее как параметры в компоненте App
function mapStateToProps(state) {
  // console.log('State', state)
  return {
    // забираем поле counter из state и говорим, что это поле будет равняться названию counter
    // после чего данное поле можно использовать в App-компоненте как props
    counter: state.counter1.counter
  }
}

// функция для манипуляции store
// dispatch - функция store
function mapDispatchToProps(dispatch) {
  return {
    // здесь мы можем задавать кастомные функции как параметры для нашего компонента,
    // кот. мы оборачиваем ( в данном случае App)
    // функци onAdd и onSub дипатчат новые actions
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    // onAddNumber будет принимать число, кот. мы хотим добавить
    onAddNumber: number => dispatch(addNumber(number)),

    // добавляем новое св-во, кот. будет диспатчить новое событие
    // создаем action creator для данного события
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

// вызываем функцию connect(), она возвращает новую функцию, которую мы уже вызываем с нашим компонентом
export default connect(mapStateToProps, mapDispatchToProps)(App)
