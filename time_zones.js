import './App.css';
import React, {useState} from 'react';
import TimeForm from './Time_Form';

function Time(){
    const [time, setTime] = useState("");    

  function getApiUrl(tz){
    const host = 'http://worldtimeapi.org/api/';
    console.log(tz);
    return `${host}/${tz}`;
  }


  async function fetchTime(tz){
    const api = getApiUrl(tz);
    console.log(api);
    try {
      const response = await fetch(api);
      if (!response.ok){
        throw new Error("Response was not okay")
      }
      const data = await response.json();
      const time = data.datetime;
      setTime(time);
    } catch(e){
      setTime( "Error Fetching Time.")
    }
    }
  

    
    return (
      <div className="App">
        <div className = "hor-box">
          <img src="/logo192.png" alt="logo192"></img>
          <p>What time is it?</p>
        </div>
        <div className='display-box'>
          <div className='hor-box'>
            <div className='time'> --- ---   {time}   --- --- </div>
            <TimeForm onTzChanged={fetchTime} />
          </div>          
        </div>
      </div>
    );
}


export default Time;
