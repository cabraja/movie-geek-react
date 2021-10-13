import React,{useState} from 'react'
import SingleMovie from './components/SingleMovie'
import Landing from './components/Landing'
import './scrollbar.css'

require('dotenv').config()


const App = () => {
  // URLs
  const urlObj = {
    API_KEY:process.env.REACT_APP_API_KEY,
    BASE_URL:"https://api.themoviedb.org/3",
    SEARCH_URL:"/search/movie?"
  }

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  return (
    <>
      <Landing {...urlObj} setMovies={setMovies} movies={movies}/>

      <main>
        {
          movies.map(item => <SingleMovie key={item.id} {...item} page={page}/>)
        }
      </main>

      {
        movies.length > 1 && <div id="page-select">
        {page>1 && <button>	&#60; Prev Page</button>}
        <button>Next Page	&#62;</button>
      </div>
      }
    </>
  )
}

export default App
