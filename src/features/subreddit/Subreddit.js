import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {SubredditItem} from '../../components/subredditItem/SubredditItem.js'


export function Subreddit() {

  //const subreddit = useSelector(selectSubreddit);
   const subreddits = ["announcements",
  "funny",
  "AskReddit",
  "gaming",
  "aww",
  "Music",
  "pics",
  "science",
  "worldnews",
  "videos",
  "todayilearned",
  "movies",
  "news",
  "Showerthoughts",
  "EarthPorn",
  "gifs",
  "IAmA",
  "food",
  "askscience",
  "Jokes",
  "LifeProTips",
  "explainlikeimfive",
  "Art",
  "books",
  "mildlyinteresting",
  "nottheonion",
  "DIY",
  "sports",
  "blog",
  "space",
  "gadgets"

  ]

  const generateSubredditList = 
  subreddits.map((subredditItem, index) => <SubredditItem subredditItem={subredditItem} index={index}/>)
  

  return (
    <div id="side">
      <h2>Subreddits</h2>
      <ul >{generateSubredditList}</ul>
    </div>)
    
}