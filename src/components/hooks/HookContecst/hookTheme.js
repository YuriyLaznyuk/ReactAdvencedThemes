import  React from 'react';
export let themes_hook={
   light:{
       background:'white',
       foreground:"#ddd3d3"
   },
   dark:{
       background:'black',
       foreground:"#f10e88"
   }
}
export const Context_hook=React.createContext(themes_hook.dark);