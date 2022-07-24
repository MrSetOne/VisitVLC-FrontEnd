import React from 'react'

const SearchResults = ({item}) => {
  return (
    <div className='SearchResults'>

        <h1>{item.name}</h1>
    </div>
  )
}

export default SearchResults