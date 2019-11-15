import React, {Component} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Room} from './Room';

class Bookings extends Component{
    constructor(props) { 
        super(props);
        if(this.props.savedData){
        this.state = { 
          roomDetails: this.props.savedData
         };
        }
        else{
            this.state={
            roomDetails:[{
                selectedFlag: true,
                selectionRequired: false,
                adultCnt: 1,
                childCnt: 0
              }, {
                selectedFlag: false,
                selectionRequired: true,
                adultCnt: 1,
                childCnt: 0
              }, {
                selectedFlag: false,
                selectionRequired: true,
                adultCnt: 1,
                childCnt: 0
              }, {
                selectedFlag: false,
                selectionRequired: true,
                adultCnt: 1,
                childCnt: 0
              }] 
            }
        }
        this.updateStateAtIndex = this.updateStateAtIndex.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      } 
    
      updateStateAtIndex(index, obj) {
        var roomsInfo = this.state.roomDetails.slice();
        roomsInfo.map(function(rmObj, rmIndex) {
          if (obj.selectedFlag && rmIndex <= index) {
            rmObj.selectedFlag = true;
          } else if (!obj.selectedFlag && rmIndex >= index && rmIndex > 0) {
            rmObj.selectedFlag = false;
            rmObj.adultCnt = 1;
            rmObj.childCnt = 0;
          } else {
            //noop
          }
        });
        roomsInfo.splice(index,1, obj);
        this.setState({ roomDetails: roomsInfo });
      }
    
      onSubmit() {
        console.log("User clicked on submit button ");
        console.table( this.state.roomDetails);
        this.props.saveRoomDetails(this.state);
      }
    render(){
        return(
        <main>
        <section className="hotel-rm-selection">
          <Room onRoomChange={ this.updateStateAtIndex } selectionRequired={this.state.roomDetails[0].selectionRequired} roomIndex={0} selectedFlag={this.state.roomDetails[0].selectedFlag} adultCnt={this.state.roomDetails[0].adultCnt} childCnt={this.state.roomDetails[0].childCnt}></Room>
          <Room onRoomChange={ this.updateStateAtIndex } selectionRequired={this.state.roomDetails[1].selectionRequired} roomIndex={1} selectedFlag={this.state.roomDetails[1].selectedFlag} adultCnt={this.state.roomDetails[1].adultCnt} childCnt={this.state.roomDetails[1].childCnt}></Room>
          <Room onRoomChange={ this.updateStateAtIndex } selectionRequired={this.state.roomDetails[2].selectionRequired} roomIndex={2} selectedFlag={this.state.roomDetails[2].selectedFlag} adultCnt={this.state.roomDetails[2].adultCnt} childCnt={this.state.roomDetails[2].childCnt}></Room>
          <Room onRoomChange={ this.updateStateAtIndex } selectionRequired={this.state.roomDetails[3].selectionRequired} roomIndex={3} selectedFlag={this.state.roomDetails[3].selectedFlag} adultCnt={this.state.roomDetails[3].adultCnt} childCnt={this.state.roomDetails[3].childCnt}></Room>
          <input type="button" className="submit-btn" value="Submit" onClick={this.onSubmit}/>
          <footer>Copyrights&copy;2019</footer>
        </section> 
        </main>
        )   
    }

}
export default Bookings;