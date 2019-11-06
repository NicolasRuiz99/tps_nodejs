import React, { Component,Fragment } from 'react'

class FormArtists extends Component {
    state = {
        method:'gettopalbums',
        artist:'cher'
    }

    changeMethod = e => {
        this.setState ({
            method:e.target.value
        },()=>{
            this.props.getArtistTops(this.state.method,this.state.artist)
        });        
    }

    changeArtist = e => {
        this.setState ({
            artist:e.target.value
        },()=>{
            this.props.getArtistTops(this.state.method,this.state.artist)
        });        
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col s12 m8 offset-2">
                            <form>
                                <div className="col">
                                <h4>Search any artist</h4>
                                <div className="input-field col s6 md-col-8">
                                    <input placeholder="Enter artist name" value={this.state.artist} type="text" onChange={e => {this.changeArtist(e)}}></input>
                                </div>
                                <div className="input-field col s12 md-col-8">
                                    <select onChange={this.changeMethod}>
                                        <option value="gettopalbums">Top Albums</option>
                                        <option value="gettoptracks">Top Tracks</option>
                                    </select>
                                </div>
                                </div>
                            </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FormArtists;