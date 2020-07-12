import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Style from './style.module.css'
import Search from '../Search/search';
import Fav from '../Favorite/fav';

const Header = () => {
 
    
    
    
    
    return (
        <Router>
            
            
                <div>

                    <div className={Style.outerContainer}>
                        <div className={Style.innerContainer}>
                           <Link className={Style.link} to="/"><div className={Style.title}>
                                THE MOVIE
                        </div></Link> 
                            <div >
                                <Link to="/fav"><img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-32.png'></img></Link>
                            </div>
                        </div>
                        <Switch>
                        <Route path="/" exact component={Search}></Route>
                        <Route path='/fav' exact component={Fav}></Route>
                        </Switch>
                        
                    </div>

                </div>
            

        </Router>

    )
}

export default Header;