import React from 'react';

  class Status extends React.Component{
      constructor(props){
          super(props);
          
      }
    
    gotoBookings(){
        this.props.history.push('/Bookings');
    }
    render(){
    return(
        <main>
            <input type="button" value="Booking the Room" onClick={this.gotoBookings.bind(this)}/>
        </main>
    );

}
}
export default Status;
