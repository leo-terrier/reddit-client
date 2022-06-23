import { useSelector } from 'react-redux'
import {Comment} from '../comment/Comment.js'

import {selectComments, loadComments} from './commentsSlice.js'

export const Comments = () => {
  const comments = useSelector(selectComments);

  const displayComments = 
    comments.map((comment, index) => <Comment index={index} comment={comment}/>)

    return <ul> {displayComments}</ul>
}