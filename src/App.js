import React,{useState} from 'react'
import SingleMovie from './components/SingleMovie'
import Landing from './components/Landing'

require('dotenv').config()


const App = () => {
  // URLs
  const urlObj = {
    API_KEY:process.env.REACT_APP_API_KEY,
    BASE_URL:"https://api.themoviedb.org/3",
    SEARCH_URL:"/search/movie?"
  }

  const [movies, setMovies] = useState([])

  return (
    <>
      <Landing {...urlObj} setMovies={setMovies} movies={movies}/>

      <main>
        {
          movies.map(item => <SingleMovie key={item.id} {...item}/>)
        }
      </main>
    </>
  )
}

export default App
