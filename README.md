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

## ✅ Project Features & Scenarios

---

### **Feature 1: Filter Events by City**

**User Story:**  
*As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.*

**Scenario 1:** Show upcoming events from all cities when no city is searched  
- **Given** the user hasn’t searched for any city  
- **When** the user opens the app  
- **Then** the user should see a list of upcoming events from all cities  

**Scenario 2:** See a list of city suggestions when typing  
- **Given** the main page is open  
- **When** the user starts typing in the city textbox  
- **Then** the user should receive a list of cities (suggestions) that match what they’ve typed  

**Scenario 3:** Select a city from the list  
- **Given** the user was typing “Berlin” in the city textbox and suggestions are visible  
- **When** the user selects a city (e.g., “Berlin, Germany”)  
- **Then** the city should be selected and events in that city should be displayed  

---

### **Feature 2: Show/Hide Event Details**

**User Story:**  
*As a user, I should be able to show or hide event details so they are not always displayed.*

**Scenario 1:** Event details are collapsed by default  
- **Given** the user opens the app  
- **When** the list of upcoming events is displayed  
- **Then** each event should be collapsed (details hidden) by default  

**Scenario 2:** Expand event details  
- **Given** the user wants to see more information about an event  
- **When** the user clicks the “Show Details” button  
- **Then** additional event information should be displayed  

**Scenario 3:** Collapse event details  
- **Given** the event details are expanded  
- **When** the user clicks the “Hide Details” button  
- **Then** the additional event information should be hidden again  

---

### **Feature 3: Specify Number of Events**

**User Story:**  
*As a user, I should be able to specify the number of events I want to see so that I can control how many results are shown.*

**Scenario 1:** Specify number of events  
- **Given** the user has entered a number in the input field  
- **When** they submit the search  
- **Then** the specified number of events should be displayed  

**Scenario 2:** No number specified  
- **Given** the user has not entered a number  
- **When** they search for events  
- **Then** all available events should be displayed (within default limits)  

---

### **Feature 4: Use the App When Offline**

**User Story:**  
*As a user, I want to use the app offline so it is available without an internet connection.*

**Scenario 1:** App shows cached data when offline  
- **Given** the app has stored data from a previous online session  
- **When** the user accesses the app with no internet connection  
- **Then** the stored event data should still be visible  

**Scenario 2:** Warning when offline  
- **Given** the user has no internet connection  
- **When** they attempt to fetch new events  
- **Then** an alert should notify them they are offline and can’t retrieve new data  

---

### **Feature 5: Add App Shortcut to Home Screen**

**User Story:**  
*As a user, I can add an App Shortcut to the Home Screen so I can access the app quickly.*

**Scenario 1:** Prompt to add to home screen  
- **Given** the user visits the app on a supported mobile browser  
- **When** conditions are met (PWA criteria)  
- **Then** the browser should prompt the user to add the app to their home screen  

---

### **Feature 6: Display Charts Visualizing Event Details**

**User Story:**  
*As a user, I can view charts visualizing event details so I can better understand the event data.*

**Scenario 1:** Show charts on the event details page  
- **Given** the user is viewing the event details page  
- **When** the event details are displayed  
- **Then** a chart visualizing the event data should be visible  
