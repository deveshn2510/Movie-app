import React from 'react';
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
                            <img className={Style.logo} src="http://www.userlogos.org/files/logos/2690_fernandosantucci/imdb.new_.logo_.png?1415113156"></img>
                        </div></Link>
                        <div >
                            <Link to="/fav"><img src='https://cdn2.iconfinder.com/data/icons/free-1/128/Favorite__star-32.png'></img></Link>
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