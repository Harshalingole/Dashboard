import React from 'react'
import Search from '../../Data/Icon/SEARCH.svg'

const SearchBar = () => {
  return (
    <div className='sb-wrapper bg-bgLightGray flexRowNoWrapJstIct  gap-4 px-4 py-1 p-4 mx-4 rounded-md'>
        {/* Right Side- Search Icon */}
        <div className="sb-right">
        <img
            src={Search}
            alt=""
            className="w-4 scale-150 hover:text-white"
          />
        </div>
        {/* Left Side- Input tag -Text */}
        <div className="sb-left w-full">
            <input type="text" name="search" id="search" placeholder='Search Here...' className='w-full text-textGray bg-bgLightGray text-sm focus:border-x-1 focus:border-bgLightGray'/>
        </div>
    </div>
  )
}

export default SearchBar