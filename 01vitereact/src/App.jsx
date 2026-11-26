

import Self from './self'

function App() {
  
  const username = 'Muskan'

  return (

    
  //  <Self/>  
   //you can return one element at a time and if you still want to return multiple element so make sure you wrap them in a div or fragment, like create a div and put all the elements inside it or use fragment which is a react component that does not render any extra element in the dom but still allows you to return multiple elements from a component. 
   <>
   <h1>Hello {username}</h1>  
   
   {/* in curly braces you can put any js expression and it will be evaluated and the result will be rendered. */}
   
    
    


   </>
  )
}

export default App
