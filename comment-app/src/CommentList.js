import React , {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{

    onDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }

    render() {
        const comments = this.props.comments
        return(
            <div>
                {comments.map((comment,i) => <Comment  index={i} onDeleteComment={this.onDeleteComment.bind(this)} comment={comment} key={i}/>)}
            </div>
        )
    }
}

export default CommentList