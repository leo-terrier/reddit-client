import { useState } from "react";
import { useDispatch } from 'react-redux';
import {generateFeedFromSearch} from '../../features/feed/feedSlice'

export function SearchBar () {
  ///Set up local state for the currently typed in caracters
  ///on submit, dispatch the generation of feeds, that should cause a re-render of Feed.

const [searchTerm, setSearchTerm] = useState('');

const dispatch = useDispatch();

function handleChange(e){
  setSearchTerm(e.target.value)
}

function handleSubmit(e){
  e.preventDefault();
  dispatch(generateFeedFromSearch(searchTerm));
}

return (
  ///display a text box as well as a magnyfier image as submit button => fires on pressing enter or on clicking the img
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text" 
        value={searchTerm}
        onChange={handleChange}>
        </input>

        <button type="submit">
          <img src="magnifyer" />
        </button>

      </form>
    </div>
)
}