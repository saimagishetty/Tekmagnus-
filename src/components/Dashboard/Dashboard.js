import React, { useState, useEffect } from 'react';
import Logs from '../logs/Logs';
import './Dashboard.css';

function Dashboard() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);
  const formattedTime = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const formattedDate = currentDateTime.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  return (
    <div className='Dashboard'>
      <div className='item1' >
        <div className='rectangle'>
          <span>Search</span>
          <span class="material-symbols-outlined">
            search
          </span>
        </div>
        <div className='square'><span class="material-symbols-outlined">
          notifications
        </span></div>
        <div className='square'><span class="material-symbols-outlined">
          mail
        </span></div>
        <div className='circle'><span class="material-symbols-outlined">
          contrast
        </span></div>
        <div className='circle'>
          <img src="https://t4.ftcdn.net/jpg/01/67/07/95/240_F_167079543_Rk1lsNYGxsfbJHXqM4y7voo3cmm1DcpV.jpg" alt="" />
        </div>
      </div>
      <div className='item2 text2'>My Space / <span>Attendance</span></div>
      <div className='item3'>
        <div className='item31'>
          <h4>Attendance Status</h4>
          <span className='item311 text3'>
            Last Week
            <span class="material-symbols-outlined">
              expand_more
            </span>
          </span>
          <div className='box item312'>
            <div className='item313'>
              <span class="material-symbols-outlined">
                schedule
              </span>
              <div>
                <h4>Avg hrs/Day</h4>
                <p>(6hrs 48m)</p>
              </div>
            </div>
            <div className='item313'>
              <span class="material-symbols-outlined green">
                pie_chart
              </span>
              {/* <img src="../../../public/wa.jpg" alt="" /> */}
              <div>
                <h4>On Time Arrival</h4>
                <p>95%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='item31'>
          <h4>Timings</h4>
          <span className='item321'>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </span>
          <div className='box item322'>
            <p>Today (9:30 AM - 06:30PM)</p>
            <p>Duration:9h 0m Break: 0m</p>
          </div>
        </div>
        <div className='item31'>
          <h4>Action</h4>
          <div className='item331'>
          </div>
          <div className='item332'>
            <div className='box item322'>
              <h1>{formattedTime}</h1>
              <p>{formattedDate}</p>
            </div>
            <div className='item333'>
              <div>
                <button className='btn'>Leave Request</button>
              </div>
              <div>
                <button className='btn'>Work From Home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Logs />
    </div>
  );
}

export default Dashboard;