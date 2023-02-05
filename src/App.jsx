import { useState } from 'react'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    <div className=" p-5 h-screen bg-gray-600 grid grid-rows-2 grid-cols-4">
      <div className="col-span-2">
      <Navbar />
      </div>
      <div className="col-span-2 bg-amber-600">  
        Discover innovative ways to decorate

We provide unmatched quality, comfort, and style for property owners across the country. 
Our experts combine form and function in bringing your vision to life. Create a room in your 
own style with our collection and make your property a reflection of you and what you love.
</div>
<div className='bg-amber-700'></div>
<div className=' col-span-2 bg-amber-800'>  About our furniture

Our multifunctional collection blends design and function to suit your individual taste.
Make each room unique, or pick a cohesive theme that best express your interests and what
inspires you. Find the furniture pieces you need, from traditional to contemporary styles
or anything in between. Product specialists are available to help you create your dream space.</div>
<div></div>
    </div>
      <a class="skip-to-content bg-darkGrey font-700" href="#main">Skip to content</a>
    </div>
  )
}

export default App
