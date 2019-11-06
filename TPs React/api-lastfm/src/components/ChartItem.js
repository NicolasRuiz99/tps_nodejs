import React from "react"

const ChartItem = ({item}) => { 

    return (
            <div className="col s12 m7 l3">
                <div className="card">
                    <div className="card-image">
                        <img src={item.image[3]['#text']} alt={item.name}></img>
                        <span className="card-title black-text">{item.name}</span>
                    </div>
                        <div className="card-content">
                        <p>Listeners: {item.listeners}</p>
                        {(item.artist) ? <p>Artist: {item.artist.name}</p> :null}   
                        {(item.duration) ? <p>Duration: {item.duration}</p> :null}   
                        </div>
                    <div className="card-action">
                        <a href={item.url}>Link to LastFM page</a>
                    </div>
                </div>
            </div>
    );
};

export default ChartItem;
