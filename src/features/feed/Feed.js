import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {FeedItem} from '../../components/feedItem/FeedItem.js';
import {Comments} from '../../components/comments/Comments.js';

//import {SelectedComments} from '../components/comments/SelectedComments.js';

import {selectFeed, loadSpecificSubreddit} from './feedSlice.js'



export const Feed = () => {

  const dispatch = useDispatch();

  const feed = useSelector(selectFeed);

  ///on first render, get initial feed from r/pics subreddit 
   useEffect(() => {
    dispatch(loadSpecificSubreddit("pics"));
    console.log(feed)
  }, [dispatch] ); 

  

  return (<ul>{feed.map((feedItem, index) => (
    <li key={index}>
      <FeedItem feedItem={feedItem}/>
      <Comments feedItem={feedItem}/>
    </li>
    )
)}</ul>)

 
///t3_viuw8r
}