//import {loadInitialSubreddit} from './SubredditItemSlice.js.js';
import {loadSpecificSubreddit} from '../../features/feed/feedSlice.js'
import { useDispatch } from 'react-redux'

export const SubredditItem = ({subredditItem, index}) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadSpecificSubreddit(subredditItem))
  }

  return (
  <li key={index}>
    <a onClick={handleClick}>{subredditItem}</a>
  </li>
  )
}