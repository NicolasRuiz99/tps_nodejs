import React,{Component, Fragment} from "react"
import ArtistItem from "./ArtistItem"
import FormArtists from "./FormArtists";
import Error from "./Error"

class Artists extends Component {
    state = {
        artists: [],
        error: false
    }

    componentDidMount () {
        this.getArtistTops ();
    }
    
    getArtistTops = async (method='gettopalbums',artist='cher') => {
        const url = `http://ws.audioscrobbler.com/2.0/?method=artist.${method}&artist=${artist}&api_key=1a05309ea26d1f418a36bd513fe259d7&format=json&limit=15&autocorrect=1`;
        console.log(url);
        
        const resp = await fetch (url);
        const artists = await resp.json();

        if (artists.error){
            this.setState ({
                error: true
            })
            return;
        }else{
            this.setState ({
                error: false
            })
        }

        if (method === 'gettoptracks'){
            this.setState ({
                artists: artists.toptracks.track
              })
        }else{
            this.setState ({
                artists: artists.topalbums.album
              })
        }
    }

    render (){
        return (
            <Fragment>
                <FormArtists 
                    getArtistTops = {this.getArtistTops}
                />
                {(this.state.error) ? <Error msj="Artist not found"/>:
                <div className = "row">
                {this.state.artists.map(item => (
                <ArtistItem
                    key = {item.url}
                    item = {item}
                />
                ))}
                </div>
                }
            </Fragment>
        );
    }
}
    

export default Artists;