import React, { useEffect, useState } from 'react';
import Style from './style.module.css';

const Fav = (props) => {
    console.log(props)
    const [data, setData] = useState('');
    useEffect(() => {
        var ids = JSON.parse(window.localStorage.getItem("ids"));
        console.log(ids);
        var apis = []
        for (var i = 0; i < ids.length; i++) {
            apis.push(fetch(`https://www.omdbapi.com/?i=${ids[i]}&apikey=dd2342c4`));
        }
        console.log(apis);
        Promise.all(apis).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(fetchedData => {
            setData(fetchedData)
            console.log(data)
        })
    }, [])

    const handleFavourite = (id) => {
        console.log(id)
        var a = id;
        if (window.localStorage.getItem("ids") !== null) {
            var b = (JSON.parse(window.localStorage.getItem("ids")));
            if (b.includes(a)) {
                var c = b.filter(result => result !== id);
                b = c;
                alert("Favorite Removed");
                document.getElementById("heartImg").style.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-32.png"
                window.location.reload();
            } else {
                b.push(a);
                alert("Favorite Added");
                document.getElementById("heartImg").style.src = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-32.png"
            }

        }
        else {
            var b = [];
            b.push(a);
            alert("Favorite Added");
            document.getElementById("heartImg").style.src = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-32.png"
        }
        window.localStorage.setItem("ids", JSON.stringify(b));



    }


    if (data == '') {
        return (<div className={Style.emptyFav}>
            <h2>Nothing in the Favorite List</h2>
        </div>)
    } else if (data != '') {
        console.log("kuch bhi")
        return (
            <div className={Style.render}>
                {console.log(data)}

                {data.map(result => {
                    return (
                        <div key={result.imdbID} className={Style.innerPost}>

                            <div className={Style.image}>
                                {result.Poster == null ? <div></div> : <img src={result.Poster} alt={result.Title}></img>}

                            </div>

                            <div className={Style.title}>
                                <div><h3>{result.Title}</h3></div>
                                <div onClick={() => { handleFavourite(result.imdbID) }}>
                                    <img id="heartImg" src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-32.png'></img>
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


export default Fav;