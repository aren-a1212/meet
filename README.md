# React + Vite

## Key Features

### 1. Filter Events by City

#### Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities
**GIVEN** the user hasn’t searched for any city  
**WHEN** the user opens the app  
**THEN** the user should see a list of upcoming events

#### Scenario 2: User should see a list of suggestions when they search for a city
**GIVEN** the main page is open  
**WHEN** the user starts typing in the city textbox  
**THEN** the user should receive a list of cities (suggestions) that match what they’ve typed

#### Scenario 3: User can select a city from the suggested list
**GIVEN** the user was typing “Berlin” in the city textbox AND the list of suggested cities is showing  
**WHEN** the user selects a city (e.g., “Berlin, Germany”) from the list  
**THEN** their city should be changed to that city AND the user should receive a list of upcoming events in that city

---

### 2. Show/Hide Event Details

#### Scenario 1: User wants to see event details by clicking a button
**GIVEN** the user wanted to see event details  
**WHEN** they click the "Show details" button  
**THEN** the user should see more details about the event

#### Scenario 2: User wants to hide event details by clicking a button
**GIVEN** the user wanted to see less information about an event  
**WHEN** they click the "Hide details" button  
**THEN** details will be hidden

---

### 3. Specify Number of Events

#### Scenario 1: User wants to specify how many events to see
**GIVEN** the user specified a number of events  
**WHEN** searching for events  
**THEN** the right amount of events will be displayed

#### Scenario 2: User didn’t provide a number of events
**GIVEN** the user didn’t provide a number  
**WHEN** they searched for events  
**THEN** all events meeting other criteria should be displayed

---

### 4. Use the App When Offline

#### Scenario 1: User wants to use the app with no internet connection
**GIVEN** the user has previously accessed the app and stored its state  
**WHEN** they lose internet connection  
**THEN** the app will load the stored state for offline use

---

### 5. Add an App Shortcut to the Home Screen

This can be done on the users device/broswer feature and cannot be  tested by the developer.

---

### 6. Display Charts Visualizing Event Details

#### Scenario 1: View charts on the event details page
**GIVEN** the user is on the event details page  
**WHEN** they view the event details  
**THEN** they should see a chart visualizing the event data

#### Scenario 2: View charts for a specific event
**GIVEN** the user has selected a specific event  
**WHEN** they navigate to the event details page  
**THEN** they should see a chart that displays the event's data in a visual format


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
