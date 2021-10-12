import React,{useState} from 'react'
import axios from 'axios'
import img from '../assets/krists-luhaers-AtPWnYNDJnM-unsplash.jpg'

const Landing = ({API_KEY,SEARCH_URL,BASE_URL,movies,setMovies}) => {

    const [searchValue, setSearchValue] = useState("")
    const [h2Style, setH2Style] = useState({})

    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = await axios.get(`${BASE_URL}${SEARCH_URL}${API_KEY}&query=${searchValue}`)
        console.log(res.data.results)
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
        <div id="landing" style={{backgroundImage:`url(${img})`}}>
            <div id="landing-inside">
                <nav>
                <h1><i className="fas fa-film"></i> Movie Geek</h1>
                <div id="nav-links">
                    <a href="/">About</a> 
                    <a href="/">FAQ</a>
                    <a href="/">API Docs</a>
                    <a href="/" id="support-button">SUPPORT US</a>
                </div>
            </nav>

            <h2 style={h2Style}>Search all of the movies you like in one place</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="search" placeholder="Search movies..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            </div>
        </div>
    )
}

export default Landing
