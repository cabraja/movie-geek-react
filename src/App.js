import React,{useState} from 'react'
import SingleMovie from './components/SingleMovie'
import Landing from './components/Landing'
import axios from 'axios'
import './scrollbar.css'
import './index.css'
import './responsive.css'

require('dotenv').config()


const App = () => {
  // URLs
  const urlObj = {
    API_KEY:process.env.REACT_APP_API_KEY,
    BASE_URL:"https://api.themoviedb.org/3",
    SEARCH_URL:"/search/movie?"
  }

  const [urls, setUrls] = useState(urlObj)
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [searchValue, setSearchValue] = useState("")
  const [h2Style, setH2Style] = useState({})

    const handleSubmit = async(e,pageNum) => {
        e.preventDefault()
        const {API_KEY,BASE_URL,SEARCH_URL} = urls

        const res = await axios.get(`${BASE_URL}${SEARCH_URL}${API_KEY}&query=${searchValue}&page=${pageNum}`)
        setMovies(res.data.results)

        // Set new styles
        const land = document.getElementById("landing")
        land.style.height = "30vh"

        const newStyle ={
            display:"none",
        }
        setH2Style(newStyle)
    }

  return (
    <>
      <Landing 
        {...urlObj} 
        setMovies={setMovies} 
        movies={movies} 
        handleSubmit={handleSubmit} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        h2Style={h2Style}
        setH2Style={setH2Style}
      />

      <main>
        {
          movies.map(item => <SingleMovie key={item.id} {...item} page={page}/>)
        }
      </main>

      {
        movies.length > 1 && 
        <div id="page-select">
          {page>1 && <button onClick={
          (e) => {
          const newPage = page - 1
          handleSubmit(e,newPage)
          setPage(newPage)
        }
        }>	&#60; Prev Page</button>}

        <button onClick={
          (e) => {
          const newPage = page + 1
          handleSubmit(e,newPage)
          setPage(newPage)
        }
        }>Next Page	&#62;</button>
      </div>
      }
    </>
  )
}

export default App
