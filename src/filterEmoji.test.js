import { screen, render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import React from "react";

import ReactDOM from "react-dom";

import filterEmoji from "./filterEmoji";









describe ("Emoji Search render ediliyor mu?", ()=> {

beforeEach (()=>{

render(<filterEmoji/>);

screen.getByTitle(filter, emoji);

});

test("SearchText itemini içeriyor mu", () => {


expect(emojiList).toBeInTheDocument();

expect(emoji).toBeInTheDocument();


});

});