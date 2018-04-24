import React , {Component} from 'react'

class Bundle extends Component {
    state ={
        mod:null
    };
    componentDidMount(){
        this.load(this.props)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.load!== this.props.lodad){
            this.load(nextProps)
        }
    }
    load(props){
        this.setState({
            mod:null
        });
        props.load((mod)=>{
            this.setState({
                mod:mod.default ? mod.default :mod
            })
        })
    }
    render(){
        return this.props.children(this.state.mod)
    }
}
export default Bundle;