import React from 'react';
import {render,unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import JestOneFetch from "./JestOneFetch";

let container=null;
beforeEach(()=>{
    container=document.createElement('div');
    document.body.appendChild(container)
});

afterEach(()=>{
    unmountComponentAtNode(container)
    container.remove();
    container.null;
})

test('render users fetch', async ()=>{
    const fakeUser=[
        {
            name:'Joni',
            username:'Coder_bam',
            website:'coder.com'

        }
    ];
    // fake fetch()

    jest.spyOn(global,'fetch').mockImplementation(()=>

        Promise.resolve({
            json: ()=>Promise.resolve(fakeUser)
        })
    )

    // Using act asynchronously to pass successfully completed promises
await act(async ()=>{
    render(<JestOneFetch/>,container)
})

    expect(container.querySelector('.name').textContent).toBe(fakeUser[0].name);
    expect(container.querySelector('.username').textContent).toBe(fakeUser[0].username);
    expect(container.querySelector('.website').textContent).toBe(fakeUser[0].website);

    // turn off dummy fetch to make sure tests are completely isolated

    global.fetch.mockRestore();

})

