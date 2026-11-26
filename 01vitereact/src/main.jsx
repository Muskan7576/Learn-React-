
import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function MyApp() {
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

//the upside code will not execute because here we have to create function not an object. the rule of react for rendering. 


const anotherUser = " NEW USER:)"

const reactElement = React.createElement(
  
  //it will take objects but we cant control the syntax because uts have its own syntax.
'a',
{href: 'https://google.com', target: '_blank'},
'Click me to visit google',

anotherUser 


)



const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>


)
 



createRoot(document.getElementById('root')).render(
  
    // <MyApp />

    // anotherElement

    // reactElement
    // <App/>

    reactElement
  
)
