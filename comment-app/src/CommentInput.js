import React , {Component} from 'react'

class CommentInput extends Component{
    constructor(){
        super()
        this.state ={
            username:'',
            content:''
        }
    }

    handleSubmmit() {
        if (this.props.onSubmit) {
            const {username, content} = this.state
            this.props.onSubmit({username, content,createdTime:+new Date()})
        }
        this.setState({content:''})
    }
    _loadUsername(){
        const name = localStorage.getItem('username')
        if(name){
            this.setState({'username':name})
        }
    }
    _saveUsername(name){
        localStorage.setItem('username',name)
    }

    handleUsernameBlur(e){
        this._saveUsername(e.target.value)
    }

    handleUsernameChange(e){
        this.setState({
             username : e.target.value
        })
    }
    handleContentChange(e){
        this.setState({
            content : e.target.value
        })
    }
    componentWillMount(){
        console.log("sss")
        this._loadUsername()
    }
    componentDidMount(){
        this.textarea.focus()
    }
    render() {
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput