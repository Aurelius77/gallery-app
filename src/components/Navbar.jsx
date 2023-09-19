import React from "react";
import Logo from '../assets/logo.png'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar({onSearch}){

    const [searchValue, setSearchValue] = React.useState('')
    function handleSubmit(){
      onSearch(searchValue)
    }

    function handleChange(e){
        setSearchValue(e.target.value)
        onSearch(searchValue)
    }

    const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSubmit(); 
  }
}
    return(
        <>
        <nav className="navbar p-3">
          <ul className ='cursor-pointer'>
            <div className="left">
            <img src={Logo} className="logo-img"></img>
            <li className="text-2xl">Home</li>
            </div>
            <div className="right">
            <li className="menu">&#8801;</li>
            <li className="text-2xl desk">About Us</li>
            <li className="text-2xl  desk">Sign out</li></div>
          </ul>

          <div className="header text-center">
            <h1 className="header-text mt-5  text-3xl shadow-lg shadow-transparent">Picture Perfect Moments.</h1>
            <div className="search-box mb-10">
                <input
             type="text"
             placeholder="Search with tags"
             className="input p-4 m-3 shadow-lg shadow-black text-black"
             value={searchValue}
             onChange ={handleChange}
             onKeyDown={handleKeyDown}
             />
             <button
             className="search-btn p-4"
             onClick={handleSubmit}
             >
              Search
             </button>
             </div>
          </div>
        </nav>
        </>
    )

}

export default Navbar