import React, { Component } from 'react';
import Hilton from "./hiltonlog.jpg";
import hotel from "./hotelexterior.jpg";
import Bookings from"./Bookings";
import "./Home.css";

class Home extends Component {
    constructor(props){
        super(props);
        this.appear=this.appear.bind(this);
        this.gotobook=this.gotobook.bind(this);
    }
    appear(){
        let param =document.getElementById("para");
        if(param.style.display==="none"){
            param.style.display="block";
        }else{
            param.style.display="none";
        }
    }
    gotobook(){
        this.props.history.push('./Bookings');
    }
    render() {
        return (
        <div>
            <nav>
                <button>Back</button>
                <h1>Hotel Details</h1>
                <img src={Hilton} alt="hilto_log"/>
            </nav>
            <div className="div_log"> 
                <img src={hotel} alt="chicago hotel"/>
                <h2>Hotel Chicago</h2>.
            </div>

            <address>
                <p>720 South Michigun Avenue</p>
			    <p>Chicago, lllinois, 60605</p>
			    <p>1-312-922-4420</p>
            </address>

            <div id="main">
		      <ul className="list">
			    <li id="l1" onClick={this.appear}>Maps</li>
                        <p id="para"> Welcome to Maps</p>
			    <li id="l2">Photo Gallery</li>
			    <li id="l3">Amenties</li>
		     </ul>
            </div>
            <div className="button">
                <button onClick={this.gotobook}>Book Now</button>
            </div>

        </div>) 
        }
}
export default Home;