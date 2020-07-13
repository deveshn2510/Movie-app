import React from 'react';
import Style from './style.module.css'

const Card = (props) => {
    const handleFavourite = (id, event) => {
        console.log(id)
        var a = id;
        if (window.localStorage.getItem("ids") !== null) {
            var b = (JSON.parse(window.localStorage.getItem("ids")));
            if (b.includes(a)) {
                var c = b.filter(result => result !== id);
                b = c;
                var elemId = event.target.parentElement.childNodes[0].id;
                console.log(elemId);
                document.getElementById(elemId).src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-32.png"
                alert("Already in the Favorite, Now Removed");


            } else {
                b.push(a);
                var elemId = event.target.parentElement.childNodes[0].id;
                console.log(elemId);
                document.getElementById(elemId).src = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-32.png"
                alert("Favorite Added");

            }

        }
        else {
            var b = [];
            b.push(a);
            var elemId = event.target.parentElement.childNodes[0].id;
            console.log(elemId);
            document.getElementById(elemId).src = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-32.png"
            alert("Favorite Added");

        }
        window.localStorage.setItem("ids", JSON.stringify(b));



    }


    const data = props.data
    console.log(data);

    if (data == '') {
        return (<div>
        </div>)

    } else if (data.Response == "False") {
        return (
            <div>
                <h2 className={Style.error}>Search Result not found</h2>
            </div>
        )
    }
    else if (data.Search != '') {

        return (
            <div className={Style.render}>


                {data.Search.map(result => {
                    return (
                        <div key={result.imdbID} className={Style.innerPost}>

                            <div className={Style.image}>
                                {result.Poster == null ? <div></div> : <img src={result.Poster} alt={result.Title}></img>}

                            </div>

                            <div className={Style.title}>
                                <div><h3>{result.Title}</h3></div>
                                <div onClick={(event) => handleFavourite(result.imdbID, event)}>
                                    <img id={result.imdbID} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-32.png"></img>
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