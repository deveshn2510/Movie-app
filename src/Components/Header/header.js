import React, { useState } from 'react';
import Style from './style.module.css'
import Search from '../Search/search';

const Header = () => {

    const [src , setSrc]= useState('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-32.png')
    return (
        <div className={Style.outerContainer}>
            <div className={Style.innerContainer}>
                <div className={Style.title}>
                    THE MOVIE
                </div>
                <div >
                    <img src={src}></img>
                    <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-32.png"></img>
                </div>
            </div>
            <Search/>
        </div>
    )
}

export default Header;