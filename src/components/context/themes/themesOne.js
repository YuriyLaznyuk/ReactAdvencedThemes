import React from 'react';
export let themesOne={
    light:{
        background:'white',
        foreground: '#f4f2f2'
    },
    dark:{
        background:'black',
        foreground: '#8e7878'
    }
}
export const MyContext1=React.createContext(themesOne.dark)