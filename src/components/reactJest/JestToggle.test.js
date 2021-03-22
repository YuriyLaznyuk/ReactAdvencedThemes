import React from "react";
import {render,unmountComponentAtNode} from 'react-dom';
import {act} from "react-dom/test-utils";
import JestToggle from "./JestToggle";

let container=null;
beforeEach(()=>{
    container=document.createElement('div');
    document.body.appendChild(container)
});

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
});
 test('changes value when clicked',()=>{
     const onChange= jest.fn();
     act(()=>{
         render(<JestToggle onChange={onChange}/>,container);
     })

// get the button element and click on it several times
const button=document.querySelector('[data-testid=toggle]');
 expect(button.innerHTML).toBe("Button Off");

     // custom event bubbles true

    act(()=>{
        button.dispatchEvent(new Event('click',{bubbles:true}));
    })
     expect(onChange).toHaveBeenCalledTimes(1)
        expect(button.innerHTML).toBe("Button On");

     act(()=>{
         for (let i = 0; i <5 ; i++) {
         button.dispatchEvent(new Event('click',{bubbles:true}));

         }
     });
     expect(onChange).toHaveBeenCalledTimes(6)
     expect(button.innerHTML).toBe("Button Off");

 })

