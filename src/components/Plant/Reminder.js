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
              <th data-testid="plant-reminder-heading">Plant</th>
              <th data-testid="content-reminder-heading">Content</th>
              <th data-testid="date-reminder-heading">Date Added</th>
              <th data-testid="interval-reminder-heading">Interval (days)</th>
              <th data-testid="delete-reminder-heading">Delete</th>
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
