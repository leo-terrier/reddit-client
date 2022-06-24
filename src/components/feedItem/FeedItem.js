import {togglingAndLoading, articlesClicked, comments} from '../comments/commentsSlice.js'
import { useDispatch, useSelector } from 'react-redux';
import { clearComments } from '../comments/commentsSlice.js';

export const FeedItem = ({feedItem, index}) => {

  const dispatch = useDispatch()

  const articlesThatAreClicked = useSelector(articlesClicked); 
  const commentaires = useSelector(comments);


  const thunkObj = {
    isAlreadyFetched: commentaires[feedItem.id] !== undefined,
    id:feedItem.id,
    obj: {subreddit: feedItem.subreddit, id: feedItem.id }
  }

  const thunk = () => {
    dispatch(togglingAndLoading(thunkObj))
    console.log(articlesThatAreClicked)
    console.log(commentaires)
    }
  

  const isTherePicture = () => {
    const formats = ['.jpg', '.jpeg' , '.jfif' , '.pjpeg' , '.pjp', '.png', 	'.svg', '.webp'];
    if (formats.find((format) => feedItem.url.includes(format))) {
      return feedItem.url
      }
    }

    const date = () => {
      const date = new Date(feedItem.created_utc*1000)
      const newDate = date.toDateString()
      return newDate
    }


  return (
      <div>
      <h3>{feedItem.title}</h3>
      <p>{feedItem.selftext}</p> 
      <div>
        <img className = "feedItemImg" src={isTherePicture()}/>
      </div>
      <div className="infoContainer">
        <p className='author'>{feedItem.author}</p>
        <p>{date()}</p>
        <a className="comments" onClick={thunk}>{feedItem.num_comments} comment(s)</a>
      </div>
      </div>
  )
}