import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import JestHello from "./JestHello";

let container=null;
beforeEach(()=>{
    // preparing the DOM element to render to
    container=document.createElement('div');
    document.body.appendChild(container);
});


afterEach(()=>{
    // clean up after completion
    unmountComponentAtNode(container);
    container.remove();
    container=null;
});

test('renders with or without a name', function () {

    // no name props
    act(()=>{
        render(<JestHello/>, container)
    }); 

    act(()=>{
        render(<JestHello name={'Vova'}/>, container)
    });
    expect(container.textContent).toBe("Hello Vova component")

    //name="Boba"

    act(()=>{
        render(<JestHello name={'Vova1'}/>, container)
    });
    expect(container.textContent).toBe("Hello Vova1 component")



}); 


