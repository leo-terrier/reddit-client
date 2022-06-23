import {useState} from 'react'
import {loadComments} from '../comments/commentsSlice.js'
import { useDispatch } from 'react-redux';
import { clearComments } from '../comments/commentsSlice.js';

export const FeedItem = ({feedItem, index}) => {

  const [commentsClicked, setCommentsClicked] = useState(false);

  const dispatch = useDispatch()

  const toggleComments = () => {
    if (!commentsClicked) {
      setCommentsClicked(true);
      const obj = {subreddit: feedItem.subreddit, id: feedItem.id}
      ////Verify how to retreive ID
      dispatch(loadComments(obj))
    }else{
      setCommentsClicked(false);
      dispatch(clearComments());
    }
  }

  const isTherePicture = () => {
    const formats = ['.jpg', '.jpeg' , '.jfif' , '.pjpeg' , '.pjp', '.png', 	'.svg', '.webp'];
    if (formats.find((format) => feedItem.url.includes(format))) {
      return feedItem.url
      }
    }

    const date = () => {
      const newDate = new Date(feedItem.created_utc)
      return newDate.toUTCString()
    }


  return (
      <div>
      <h3>{feedItem.title}</h3>
      <p>{feedItem.selftext}</p> 
      <div>
        <img className = "feedItemImg" src={isTherePicture()}/>
      </div>
      <div>
        <p>{feedItem.author}</p>
        <p>{date()}</p>
        <p onClick={toggleComments}>{feedItem.num_comments}</p>
      </div>
      </div>
  )
}