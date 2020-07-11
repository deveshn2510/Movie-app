import React, { useState } from 'react';
import Style from './style.module.css';
const Search = () => {

    const [title, setTitle]=useState('')
    const [year, setYear]=useState('')
    const [type, setType]=useState('')

    const handleSearch = () =>{
        console.log(title,year,type);

        fetch(`http://www.omdbapi.com/?s=${title}&y=${year}&type=${type}&apikey=dd2342c4`).then(res=>res.json()).then(
            dataFetched => {console.log(dataFetched)}
        )
    }


    return (<div className={Style.outerContainer}>
        <div className={Style.innerContainer}>
            <div className={Style.searchTitle}>
                Search
               <br></br>
            </div>
            <div className={Style.inputs}>
                <label>  Title: </label>
                <input className={Style.input} value={title} onChange={e=>{setTitle(e.target.value)}}></input>
                <label>  Year: </label>
                <input className={Style.input} value={year} onChange={e=>{setYear(e.target.value)}}></input>
                <label>  Type: </label>
                <select className={Style.input} value={type} onChange={e=>{setType(e.target.value)}}>
                    <option value="" >All</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </select>
                <button className={Style.inputButton} onClick={handleSearch}>Search</button>

            </div>
        </div>
    </div>)
}

export default Search;