import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { InfoAlert as InfoAlertComponent } from './components/Alert';
import { ErrorAlert } from './components/Alert';
import { WarningAlert } from './components/Alert';
import EventGenresChart from './components/EventGenresChart';
import CityEventsChart from './components/CityEventsChart';
import './App.css';



const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [errorAlert, setErrorAlert] = useState("");
  const [infoAlert, setInfoAlert] = useState("");
  const [warningAlert, setWarningAlert]= useState("");

  useEffect(() => {
    if(navigator.onLine){
      setWarningAlert("")
    }else {
      setWarningAlert("You are offline: showing cached events (may be out of date.)")
    }
    fetchData();
  }, [currentCity, currentNOE]);

  useEffect(() => {
       window.dispatchEvent(new Event("resize"));
      }, [events]);

  const fetchData = async () => {
    const data = await getEvents();
    const allEvents = data || [];
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className='App'>
      <h1>Meet App</h1>
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlertComponent text={infoAlert} /> : null}
        {errorAlert && <ErrorAlert text={errorAlert}  />}
        {warningAlert && <WarningAlert text={warningAlert} />}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert} 
        />
        <div className="charts-container">
        <div className="chart-wrapper">
          <EventGenresChart events={events} />
         </div>
        
         <div className="chart-wrapper" width="110%">
        <CityEventsChart allLocations={allLocations} events={events} />
        </div>
       
        </div>
      <EventList events={events} />
    </div>
  );


};

export default App;
