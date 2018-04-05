import React ,{ Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import Header from "./Header";
class Content extends Component {
    render() {
        return (
            <div>
                <Header/>
                <p>React.js book</p>
                <ThemeSwitch />
            </div>
        )
    }
}
export default Content
