import React, { useContext } from 'react'
import { MoviesContext } from '../App'

const SearchMovies = () => {
	const data = useContext(MoviesContext)
	return (
		<div>
			<input onChange={e => data.setSearch(e.target.value)} />
		</div>
	)
}

export default SearchMovies
