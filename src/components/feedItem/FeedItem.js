import {articlesClicked, comments, toggleClickedArticleList, loadComments} from '../comments/commentsSlice.js'
import { useDispatch, useSelector } from 'react-redux';

export const FeedItem = ({feedItem}) => {

  const dispatch = useDispatch()

  const commentaires = useSelector(comments);


  const toggleAndLoad = () => {
    dispatch(toggleClickedArticleList(feedItem.id));
      if (commentaires[feedItem.id] === undefined) {
        dispatch(loadComments({subreddit: feedItem.subreddit, id: feedItem.id }))   
    }
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
        <a className="comments" onClick={toggleAndLoad}>{feedItem.num_comments} comment(s)</a>
      </div>
      </div>
  )
}