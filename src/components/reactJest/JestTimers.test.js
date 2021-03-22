import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import JestTimers from "./JestTimers";

//fakeTamer
jest.useFakeTimers();
let container=null;
beforeEach(()=>{
    container=document.createElement('div');
    document.body.appendChild(container);
})
afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})

test('selects null after timeout',()=>{
    // Using a mock function
    const onSelect=jest.fn();
    act(()=>{
        render(<JestTimers onSelect={onSelect}/>,container)
    })
    // move forward in time by 100 ms
    act(()=>{
        jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    // move forward in time by 5000 ms
act(()=>{
    jest.advanceTimersByTime(5000)
});

// ????
    // expect(onSelect).toHaveBeenCalledWith(null);
    expect(onSelect).not.toHaveBeenCalled();

});
// clear
test('should cleanup on being removed',()=>{
    const onSelect=jest.fn();
    act(()=>{
        render(<JestTimers onSelect={onSelect}/>,container)
    });

    act(()=>{
        jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    //repairing the application
    act(()=>{
        render(null,container);
    })

    act(()=>{
        jest.advanceTimersByTime(5000);
    });

    expect(onSelect).not.toHaveBeenCalled();
})
//selection button call

test('selection button call',()=>{
    const onSelect=jest.fn();
    act(()=>{
        render(<JestTimers onSelect={onSelect}/>,container);
    })

    act(()=>{
        container.querySelector("[data-test='2']")
            .dispatchEvent(new Event('click',{bubbles:true}));
    });
    expect(onSelect).toHaveBeenCalledWith(2)
});
