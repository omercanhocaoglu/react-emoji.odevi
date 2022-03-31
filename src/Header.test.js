import { screen, render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import React from "react";

import ReactDOM from "react-dom";









describe ("Emoji Search render ediliyor mu?", ()=> {

beforeEach (()=>{

render(<Header/>);

screen.getByText("Emoji Search");

});








});