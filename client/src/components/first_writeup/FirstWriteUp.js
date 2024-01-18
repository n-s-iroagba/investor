import React from "react";
import './FirstWriteUp.css'
import Dash from "../dash/Dash";
import SearchBar from "../search_bar/SearchBar"



const FirstWriteUp = () => {
return<div className="first-writeup-wrapper">
   <Dash/>
   <h6 className="first-writeup-text">
    Connect your money decisions to the future you want
   </h6>
   <SearchBar/>
</div>
}
export default FirstWriteUp;    