import React, { useState } from "react";

 
const Event = ({event})=>{
const [showDetails, setShowDetails]= useState(false);    
   
        return (
            <li className="event">
              <h2>{event.summary}</h2>
              <p>{event.location}</p>
              <p>{new Date(event.created).toUTCString()}</p>
        
              <button
                className="details-btn"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "hide details" : "show details"}
              </button>
        
              {showDetails && (
                <div className="details">
                  <p>{event.description}</p>
                  <a href={event.htmlLink} target="_blank" rel="noopener noreferrer">
                    see details
                  </a>
                </div>
              )}
            </li>
          );
        };
        
export default Event;