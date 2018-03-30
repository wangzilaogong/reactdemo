import React , {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{
    render() {
        const comments = [{username:1,content:2}]
        return(
            <div>
                {comments.map((comment,i) =>{ <Comment comment={comment} key={i}/>})}
            </div>
        )
    }
}

export default CommentList