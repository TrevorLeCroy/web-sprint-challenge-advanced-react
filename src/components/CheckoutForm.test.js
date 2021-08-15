import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    const checkoutForm = render(<CheckoutForm/>)
    expect(checkoutForm).not.toBeNull();
});

test("shows success message on submit with form details", () => {
   const form      = render(<CheckoutForm/>);
   const firstName = form.getByLabelText('First Name:');
   const lastName  = form.getByLabelText('Last Name:');
   const address   = form.getByLabelText('Address:');
   const city      = form.getByLabelText('City:');
   const state     = form.getByLabelText('State:');
   const zip       = form.getByLabelText('Zip:');

   const submit = form.getByRole('button');

   userEvent.type(firstName, 'First Name');
   userEvent.type(lastName, 'Last Name');
   userEvent.type(address, 'Address');
   userEvent.type(city, 'City');
   userEvent.type(state, 'state');
   userEvent.type(zip, 'zip');

   submit.click();

   const successMessage = form.getByTestId(/successMessage/);
   expect(successMessage).toBeInTheDocument();
});
