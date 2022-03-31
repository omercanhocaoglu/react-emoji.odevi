import React from "react";

import { screen, render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import emojiResult from "./EmojiResults"









describe ("listedeki herhangi bir emojiye tıklandığında, o emoji kopyalanıyor mu", ()=> {

    beforeEach (()=>{
    
    render(<emojiResult/>);
    
    userEvent.click(Clipboard);

    expect(screen.getByText(".copy-to-clipboard")).toBeInTheDocument();

    const title = screen.getByTitle(emojiData.title);
    
    });

});