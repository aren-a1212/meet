# Meet App

A serverless, progressive web application (PWA) built with React using a test-driven development (TDD) approach. This app integrates with the Google Calendar API to display upcoming events for different cities and offers data visualizations for better insights.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Scenarios](#project-scenarios)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Testing](#testing)
- [Deployment](#deployment)

---

## Overview

**Meet App** is a React-based PWA that helps users find and explore events in various cities using the Google Calendar API. The app follows a **test-driven development (TDD)** approach and uses **serverless functions** to handle authentication securely. It supports offline functionality, mobile installation, and interactive charts for data visualization.

---

## Key Features

- Filter events by city
- Show/hide event details
- Specify the number of events displayed
- Offline access via service worker
- Add shortcut to home screen (PWA)
- Interactive charts displaying event data (scatterplot & pie chart)

---

## Project Scenarios

### Feature 1: Filter Events by City

#### Scenario 1: Display all events when no city is searched
**GIVEN** the user hasn’t searched for any city  
**WHEN** the user opens the app  
**THEN** the user should see a list of upcoming events from all cities

#### Scenario 2: Show city suggestions as user types
**GIVEN** the main page is open  
**WHEN** the user starts typing in the city textbox  
**THEN** the user should receive a list of cities that match what they’ve typed

#### Scenario 3: Select a city from the suggested list
**GIVEN** the user was typing “Berlin” and the list of suggested cities is showing  
**WHEN** the user selects a city (e.g., “Berlin, Germany”)  
**THEN** the city should be set and events in that city should be displayed

---

### Feature 2: Show/Hide Event Details

#### Scenario 1: Expand event details
**GIVEN** the user wants to see more information about an event  
**WHEN** they click the "Show details" button  
**THEN** the event's details should be displayed

#### Scenario 2: Collapse event details
**GIVEN** the event details are displayed  
**WHEN** the user clicks the "Hide details" button  
**THEN** the event's details should be hidden

---

### Feature 3: Specify Number of Events

#### Scenario 1: Set a specific number of events
**GIVEN** the user has specified a number of events  
**WHEN** they search for events  
**THEN** the app should display that number of events

#### Scenario 2: No number specified
**GIVEN** the user hasn’t specified how many events to see  
**WHEN** they search for events  
**THEN** the app should display all matching events

---

### Feature 4: Use the App When Offline

#### Scenario 1: Use app without internet connection
**GIVEN** the user has previously accessed the app  
**WHEN** they are offline  
**THEN** the app should display the cached data and function offline

---

### Feature 5: Add App Shortcut to the Home Screen

> This feature is managed by the browser and OS, and cannot be tested programmatically.

---

### Feature 6: Display Charts Visualizing Event Details

#### Scenario 1: View chart on event details page
**GIVEN** the user is on the event details page  
**WHEN** they view the event  
**THEN** a chart should be displayed visualizing event data

#### Scenario 2: View chart for a selected event
**GIVEN** the user has selected a specific event  
**WHEN** they navigate to its details  
**THEN** a chart should display the event’s data visually

---

## Tech Stack

- React
- AWS Lambda (serverless functions)
- Google Calendar API + OAuth2
- Jest & Enzyme (testing)
- Recharts (data visualization)
- Lighthouse (PWA compliance)
- GitHub Pages (deployment)
- Service Workers (offline support)

---

## Installation

```bash
git clone https://github.com/your-username/meet-app.git
cd meet-app
npm install
npm start
