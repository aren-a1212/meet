import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';

import './App.css';



const App = () => {
  const [events, setEvents]=useState([]);
const [currentNOE, setCurrentNOE]=useState(32);
const [allLocations, setAllLocations] = useState([]);
const [currentCity, setCurrentCity] = useState("See all cities");
const [errorAlert, setErrorAlert] = useState("");

useEffect(() => {
  fetchData();
},[currentCity, currentNOE]);

const fetchData = async () => {
  const data       = await getEvents();               
  const allEvents  = data || []; 
  const filteredEvents = currentCity === "See all cities" ?
    allEvents :
    allEvents.filter(event => event.location === currentCity)
  setEvents(filteredEvents.slice(0, currentNOE));
  setAllLocations(extractLocations(allEvents));
}

 return (
   <div className='App'>
     <CitySearch allLocations={allLocations}  setCurrentCity={setCurrentCity}  />
     <NumberOfEvents   currentNOE={currentNOE}
  setCurrentNOE={setCurrentNOE}
  setErrorAlert={setErrorAlert}  />
     <EventList events={events} />
   </div>
 );


};

export default App;
