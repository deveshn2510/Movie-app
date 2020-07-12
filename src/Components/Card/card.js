import React from 'react';
import Style from './style.module.css'

const Card = (props) => {
    
    const data = props.data
    
    if (data == '') {
        return (<div>
        </div>)
    } else if(data.Search!='') {

        return (
            <div className={Style.render}>
                {console.log(data)}

                {data.Search.map(result => {
                    return (
                        <div key={result.imdbID} className={Style.innerPost}>
                            
                                <div className={Style.image}>
                                    {result.Poster == null ? <div></div> : <img src={result.Poster} alt={result.Title}></img>}

                                </div>

                            
                            <div><h3>{result.Title}</h3></div>
                            <div className={Style.description}>{result.description}<a key={result.Title}  >Read More</a></div>


                        </div>
                    )
                })

                }
            </div>
        )
    }
}

export default Card;