import {useState} from 'react'
import {loadComments} from '../comments/commentsSlice.js'
import { useDispatch } from 'react-redux';
import { clearComments } from '../comments/commentsSlice.js';
gi
export const FeedItem = ({feedItem, index}) => {

  const {commentsClicked, setCommentsClicked} = useState(false);

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
    const formats = ['.jpg ', '.jpeg' , '.jfif' , '.pjpeg' , '.pjp', '.png', 	'.svg', '.webp'];
    console.log(feedItem)
    if (formats.find((format) => feedItem.url.includes(format))) {
      return feedItem.url
      }
    }

  return (
      <div>
      <h3>{feedItem.title}</h3>
      <p>{feedItem.selftext}</p> 
      <img src={isTherePicture()}/>
      <div>
        <p>{feedItem.author}</p>
        <p>{feedItem.created_utc.toUTCString()}</p>
        <p onClick={toggleComments}>{feedItem.num_comments}</p>
      </div>
      </div>
  )
}