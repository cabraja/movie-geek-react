import React,{useState} from 'react'
import img from '../assets/krists-luhaers-AtPWnYNDJnM-unsplash.jpg'

const Landing = ({searchValue,setSearchValue,h2Style,setH2Style,handleSubmit}) => {

    
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
