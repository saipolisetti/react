import React from "react";
import "./booking.css"
function Booking(){
    return(
        <div>
            <h1 style={{textAlign:"center", fontWeight:"bold"}}>Welcome to Hilton</h1>
            <div className="main_room">
                <div className="room1">
                    <div className="header">
                        <heder>Room1</heder>
                    </div>
                </div>
                <div className="room2">
                    <div className="header">
                        <input type="checkbox" name="checkbox"></input>
                        <label>Room 2</label>
                    </div>
                            <div className="list">
                            <label className="adults">adults(18+)</label>
                                <div className="sub_list">
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                             </div>
                            <label className="child">Children(0-17)</label>       
                                <div className="sub_list">
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>        
                </div>

                <div className="room3">
                     <div className="header">
                        <input type="checkbox" name="checkbox"></input>
                        <label>Room 3</label>  
                    </div>
                </div>

                <div className="room4">
                    <div className="header">
                        <input type="checkbox" name="checkbox"></input>
                        <label>Room 4</label>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Booking;