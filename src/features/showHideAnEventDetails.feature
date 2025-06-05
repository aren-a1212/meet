Feature: Show/Hide Event Details
  Scenario: An event element is collapsed by default
    Given the user hasn’t expanded any event
    When the user opens the app
    Then the event element should be collapsed by default

  Scenario: User can expand an event to see details
    Given the main page is open
    When the user clicks on an event’s “show details” button
    Then the event element should expand to show details

  Scenario: User can collapse an event to hide details
    Given the event element is expanded
    When the user clicks on the “hide details” button
    Then the event element should collapse and hide details
