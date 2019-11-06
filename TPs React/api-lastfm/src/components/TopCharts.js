import React,{Component, Fragment} from "react"
import ChartItem from "./ChartItem"
import FormCharts from "./FormCharts";

class TopCharts extends Component {
    state = {
        charts: []
    }

    componentDidMount () {
        this.getTopCharts ();
    }
    
    getTopCharts = async (method='gettopartists') => {
        const url = `http://ws.audioscrobbler.com/2.0/?method=chart.${method}&api_key=1a05309ea26d1f418a36bd513fe259d7&format=json&limit=15`;
        console.log(url);
        
        const resp = await fetch (url);
        const charts = await resp.json();

        if (method === 'gettopartists'){
            this.setState ({
                charts: charts.artists.artist
              })
        }else{
            this.setState ({
                charts: charts.tracks.track
              })
        }
    }

    render (){
        return (
            <Fragment>
                <FormCharts
                    getTopCharts = {this.getTopCharts}
                />
                <div className = "row">
                    {this.state.charts.map(item => (
                    <ChartItem
                        key = {item.url}
                        item = {item}
                    />
                    ))}
                </div>
            </Fragment>
        );
    }
}
    

export default TopCharts;