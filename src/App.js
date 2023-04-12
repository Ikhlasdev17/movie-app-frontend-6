import React, { createContext, useState } from 'react'
import SearchMovies from './components/SearchMovies'
import FilterMovies from './components/FilterMovies'
import Movies from './components/Movies'
// Context API
export const MoviesContext = createContext()

const App = () => {
	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState('iron man')
	const [type, setType] = useState('')

	return (
		<MoviesContext.Provider
			value={{
				movies,
				search,
				type,
				setMovies,
				setSearch,
				setType: e => setType(e),
			}}
		>
			<div>
				<SearchMovies />
				<div>
					<FilterMovies />
					<Movies />
				</div>
			</div>
		</MoviesContext.Provider>
	)
}

export default App
