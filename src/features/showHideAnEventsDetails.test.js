import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, test => {
    let AppComponent;
    let AppDOM;
    test('An event element is collapsed by default', ({ given, when, then }) => {
    	given('the user hasn’t expanded any event', () => {

    	});

    	when('the user opens the app', () => {
            AppComponent= render(<App />);
            AppDOM= AppComponent.container.firstChild;

    	});

    	then('the event element should be collapsed by default', () => {
          const deatils = AppDOM.querySelector('.event .deatils');
          expect(deatils).toBeNull();
    	});
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
    	given('the main page is open', () => {
         AppComponent= render(<App/>);
         AppDOM= AppComponent.container.firstChild;
    	});

    	when('the user clicks on an event’s “show details” button', async () => {
        const user = userEvent.setup();
        const button= await screen.findAllByRole('button', {name: /show details/i });
       await  user.click(button[0]);
    	});

    	then('the event element should expand to show details', () => {
        const details= AppDOM.querySelector('.event .details');
        expect(details).toBeInTheDocument();
    	});
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
    	given('the event element is expanded', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            const user = userEvent.setup();
            const button = await screen.findAllByRole('button', { name: /show details/i });
            await user.click(button[0]);
    	});

    	when('the user clicks on the “hide details” button',async  () => {
         const user= userEvent.setup();
         const button= await screen.findAllByRole('button',  { name: /hide details/i });
         await user.click(button[0]);
    	});

    	then('the event element should collapse and hide details', () => {
         const deatils= AppDOM.querySelector('.event .details');
         expect(deatils).toBeNull();
    	});
    });



  });