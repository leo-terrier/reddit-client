import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import {Comment} from '../comment/Comment.js'

import {articlesClicked, comments} from './commentsSlice.js'



export const Comments = ({feedItem}) => {

  useEffect(() => {
    console.log(articlesThatAreClicked)
  })

  const articlesThatAreClicked = useSelector(articlesClicked);
  const commentaires = useSelector(comments);

   

     /* const test = commentaires[feedItem.id] !== undefined && articlesThatAreClicked.includes(feedItem.id) && commentaires[feedItem.id].map((commentaire) => <li>{commentaire.author}</li>) 

  return <ul>{test}</ul> */
  return <ul>{commentaires[feedItem.id] !== undefined && articlesThatAreClicked.includes(feedItem.id) && commentaires[feedItem.id].map((comment, index) => <Comment index={index} comment={comment} />)}</ul>

}