import React, { Component } from 'react'

class FormCharts extends Component {
    state = {
        method:'gettopartists'
    }

    changeMethod = e => {
        this.setState ({
            method:e.target.value
        },()=>{
            this.props.getTopCharts(this.state.method)
        });        
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <h3>Top Artists / Top Tracks</h3>
                        <div className="input-field col s12 md-col-8">
                            <select onChange={this.changeMethod}>
                                <option value="gettopartists">Top Artists</option>
                                <option value="gettoptracks">Top Tracks</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormCharts;