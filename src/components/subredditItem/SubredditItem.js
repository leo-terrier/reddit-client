//import {loadInitialSubreddit} from './SubredditItemSlice.js.js';
import {loadSpecificSubreddit, selectFeed} from '../../features/feed/feedSlice.js'
import { useDispatch, useSelector } from 'react-redux'

////


export const SubredditItem = ({subredditItem, index}) => {
  ///
  const feed = useSelector(selectFeed)

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadSpecificSubreddit(subredditItem))
    console.log(feed)
  }

  return (
  <li key={index}>
    <a onClick={handleClick}>{subredditItem}</a>
  </li>
  )
}