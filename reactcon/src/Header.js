import React , { Component } from 'react'
class Header extends Component {
    constructor () {
        super()
        this.state = { themColor : ''}
    }

    componentWillMount() {
        this._updateThemeColor()
    }

    _updateThemeColor(){
        const { store } = this.context
        console.log(store)
        const state = store.getState()
        this.setState( {themColor:state.themColor })
    }

    render() {
        return(
            <h1 style={{ color :this.state.themColor }}>React.js books</h1>
        )
    }
}
export default Header

