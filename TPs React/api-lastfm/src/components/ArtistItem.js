import React from "react"

const ArtistItem = ({item}) => { 

    return (
            <div className="col s12 m7 l3">
                <div className="card">
                    <div className="card-image">
                        <img src={item.image[3]['#text']} alt={item.name}></img>
                    </div>
                        <div className="card-content">
                        <span className="card-title black-text">{item.name} - {item.artist.name}</span>
                        <p>Playcount: {item.playcount}</p> 
                        {(item.listeners) ? <p>Listeners: {item.listeners}</p> :null}   
                        </div>
                    <div className="card-action">
                        <a href={item.url}>Link to LastFM page</a>
                    </div>
                </div>
            </div>
    );
};

export default ArtistItem;
