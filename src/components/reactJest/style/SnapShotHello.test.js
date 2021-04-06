import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import pretty from 'pretty';

import JestHello from "../JestHello";

let container=null;
beforeEach(()=>{
   container= document.createElement('div');
   document.body.appendChild(container);

})

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})

test('hello snapshot', ()=>{

   act(()=>{
       render(<JestHello/>,container);
   });
   expect(
       pretty(container.innerHTML)
   ).toMatchInlineSnapshot()
    // auto-populated by Jest

act(()=>{
    render(<JestHello name="Jest" />,container);
})
expect(
    pretty(container.innerHTML)
).toMatchInlineSnapshot()
    // auto-populated by Jest


    act(()=>{
        render(<JestHello name="SnapShot" />,container);
    })
    expect(
        pretty(container.innerHTML)

    ).toMatchInlineSnapshot()
    // auto-populated by Jest

})