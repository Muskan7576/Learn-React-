import React from 'react'

// Props (short for properties) are used to pass data from a parent component to a child component.
// Props help us reuse the same component with different data.
// Props are read-only, which means a child component cannot change them directly.
// We can access props inside a component using props.name or by destructuring them.



// function ke andr jo use name btntext hai wo props hai jo parent component se child component me pass kiye gaye hai.  you can pass props but here we are destructuring them. so we can directly use them without using props.name or props.btnText.

function Card({username, btnText="Learn Me"}) {
    console.log(username, btnText)
  return (
     <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-pink-500 p-6 rounded-2xl shadow-lg w-80">

        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to React
        </h1> 
        
        

        <p className="text-gray-500 mt-3">
          This is a simple card made using Tailwind CSS {username}.
        </p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700">
          {btnText}
        </button>

      </div>

    </div>
  )
}

export default Card
