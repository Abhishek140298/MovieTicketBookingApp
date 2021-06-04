import React from 'react';

const TicketDetails = (props) => {
  
  console.log("count",props);
  const ticketPrice=(props.match.params.ticket)*(props. match.params.price)
  if(props.match.params.ticket>0){
  return (<><h1>Number Of tickets {props.match.params.ticket}
  </h1>
  <h2>Total amount paid {ticketPrice}</h2></>);}
  else{
    return(<h1>No tickets</h1>)
  }

};
export default TicketDetails;
