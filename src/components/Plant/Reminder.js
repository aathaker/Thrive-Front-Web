import React from 'react';
import { format } from 'date-fns';
import './Reminder.css';

const Reminder = (props) => {
  const formattedDate = format(new Date(props.date), 'MM/dd/yyyy'); // Format the date as needed

  

  if (props.heading === 'true') {
    return (
      <div className='reminder heading'>
        <table>
          <thead>
            <tr>
              <th>Plant</th>
              <th>Content</th>
              <th>Date Added</th>
              <th>Interval (days)</th>
              <th>Delete</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div className='reminder'>
        <table>
          <tbody>
            <tr>
              <td>{props.plant}</td>
              <td>{props.content}</td>
              <td>{formattedDate}</td>
              <td>{props.interval}</td>
              <td>{props.button}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default Reminder;
