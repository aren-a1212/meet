import React from "react";
import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberofEvents.feature');

defineFeature(feature, test => {
    let AppComponent;
    let EventListDOM;
    test('When user has not specified a number, 32 events are shown by default.', ({ given, and, when, then }) => {
        given('the user is on the events page', () => {
            AppComponent = render(<App />);
        });

        and('the user hasn’t specified a number of events to display', () => {

        });

        when('the page loads', () => {
            EventListDOM = AppComponent.container.querySelector('#event-list');

        });

        then(/^(\d+) events should be displayed by default$/, async (arg0) => {
            await waitFor(() => {
                const listItems = within(EventListDOM).queryAllByRole('listitem');
                expect(listItems.length).toBeLessThanOrEqual(Number(arg0));
            });
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
        let inputBox;
        given('the user is on the events page', () => {
            AppComponent = render(<App />);
        });

        when('the user specifies a number of events to display', async () => {
            const user = userEvent.setup();
            inputBox = AppComponent.getByTestId('numberOfEventsInput');
            await user.clear(inputBox);
            await user.type(inputBox, '10');
        });

        then('that number of events should be displayed', async () => {
            const EventListDOM = AppComponent.container.querySelector('#event-list');
            const events = within(EventListDOM).queryAllByRole('listitem');
            expect(events.length).toBe(10);
        });
    });
});