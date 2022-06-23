//import { useState } from "react";
import {SearchBar} from "../searchBar/SearchBar.js"
//import { Dispatch } from "react";

export function Header () {
///Header is made of one logo on the left, and a search bar
return (
    <div id="headerDiv">
      <div id="headerSubDiv">
        <div>
        <img id='logo' src={require("../../img/reddit.jpeg")}/>
        </div>
        <h1>Reddit Client</h1>
      </div>
      <SearchBar />
    </div>
)
}