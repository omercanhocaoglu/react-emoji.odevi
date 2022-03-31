import React from "react";

import ReactDOM from "react-dom";

import { screen, render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import emojiList from ":/emojiList.json";









describe ("Bütün title itemleri render ediliyor mu", ()=> {

    beforeEach (()=>{
    
    render(<emojiList.json/>);
    
    title=screen.getByTitle(title).toBeInTheDocument();
    
    });

});