// import React from 'react'
import { useState } from "react"
import { useGlobalContext } from "../useGlobalContext"
const Search = () => {

const {setSearchTerm,fetchRandom} = useGlobalContext()
const [text,setText] = useState('');

const handleChange = (e) =>{
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text) {
            setSearchTerm(text)
        }
    }
    const handleRandom = () => {
        setText('')
        setSearchTerm('')
        fetchRandom()
    }
  return (
    <header>
        <form action="" onSubmit={handleSubmit} >
            <input type="text" onChange={handleChange} value={text} className="form-input"/>
            <button type="submit" className="btn">
                Search
            </button>
            <button type="button" className="btn btn-hipster" onClick={handleRandom}>
                Surprise me !
            </button>
        </form>
    </header>
  )
}

export default Search