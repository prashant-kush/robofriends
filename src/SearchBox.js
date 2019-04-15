import React from "react";


const SearchBox=({searchfield, searchChange})=>
{
	return(
		<div className="pa2 dib b--green bg-lightest-blue">
		<input type="search" placeholder="search Robots" value={searchfield} onChange={searchChange}/>
		</div>
		);
}



export default SearchBox;