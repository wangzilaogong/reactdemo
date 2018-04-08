import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content'
import Header from './Header'
import './index.css'




function createStore(reducer) {
    let state = null
    const listeners = [ ]
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer( state , action )
        listeners.forEach((listener) => listener())
    }
    dispatch({ })
    return { getState , dispatch , subscribe}
}

const themReducer = ( state ,action) => {
    if (!state) return {
        themColor : 'red'
    }
    switch ( action.type ){
        case 'CHANGE_COLOR':
            return { ...state , themColor: action.themColor }
        default:
            return state
    }
}

const  store = createStore(themReducer)

class Index extends Component {

    getChildContext () {
        return {store}
    }


    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)