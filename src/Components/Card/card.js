import React from 'react';
import Style from './style.module.css'

const Card = (props) => {
    const handleFavourite = (id) => {
        console.log(id)
        var a = id;
        if (window.localStorage.getItem("ids") !== null) {
            var b = (JSON.parse(window.localStorage.getItem("ids")));
            if (b.includes(a)) {
                var c = b.filter(result => result !== id);
                b = c;
                alert("Favorite Removed");
            } else {
                b.push(a);
                alert("Favorite Added");
            }

        }
        else {
            var b = [];
            b.push(a);
            alert("Favorite Added")
        }
        window.localStorage.setItem("ids", JSON.stringify(b));



    }
    

    const data = props.data

    if (data == '') {
        return (<div>
        </div>)
    } else if (data.Search != '') {

        return (
            <div className={Style.render}>
                {console.log(data)}

                {data.Search.map(result => {
                    return (
                        <div key={result.imdbID} className={Style.innerPost}>

                            <div className={Style.image}>
                                {result.Poster == null ? <div></div> : <img src={result.Poster} alt={result.Title}></img>}

                            </div>

                            <div className={Style.title}>
                                <div><h3>{result.Title}</h3></div>
                                <div onClick={() => handleFavourite(result.imdbID)}>
                                    <img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-32.png'></img>
                                </div>
                            </div>



                        </div>
                    )
                })

                }
            </div>
        )
    }
}

export default Card;