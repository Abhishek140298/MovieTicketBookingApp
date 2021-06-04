import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieBooking = (props) => {
  const [tickets, setTickets] = useState(0);
  console.log(tickets);
  const reduceTicket = () => {
    if (tickets > 0) {
      setTickets(tickets - 1);
    }
  };
  const addTicket = () => {
    setTickets(tickets + 1);
  };
  const confirmTickets = () => {};
  console.log('ticket price', props.price);
  return (
    <div className='tickets'>
      Select the number of the ticket
      <div className='reduce_ticket' onClick={reduceTicket}>
        -
      </div>
      <div className='ticket_number'>{tickets}</div>
      <div className='add_ticket' onClick={addTicket}>
        +
      </div>
      <Link to={{pathname:`/ticket/${tickets}/${props.price}`}}>Confirm</Link>
    </div>
  );
};

export default MovieBooking;
