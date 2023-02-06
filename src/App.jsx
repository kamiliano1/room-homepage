import { useState } from 'react'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function toggleNav() {
    setIsActive(prev=>!prev)
  }

  const styles = {
    backgroundImage: isActive ? "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/images/mobile-image-hero-1.jpg')" : "url('/images/mobile-image-hero-1.jpg')"
  }

  return (
    <div className=''>
      <div className={isActive?  "nav-activated" : ""}></div>

    <div className="h-screen sm:grid sm:grid-rows-2 sm:grid-cols-4" >

    {/* <div className="logo col-span-2 bg-[url('/images/mobile-image-hero-1.jpg')] bg-no-repeat bg-cover h-320 bg-left-bottom relative "> */}
    <div className="hero-img col-span-2 h-320 bg-left-bottom relative bg-no-repeat bg-cover"style={styles}>
    {/* <div className="logo col-span-2 bg-no-repeat bg-cover h-320 bg-left-bottom relative "> */}
      <div className='flex absolute bottom-0 right-0'>
  <span><img className='bg-black px-5 py-4' src="/images/icon-angle-left.svg" alt="left arrow" /><p className='sr-only'>Left Arrow</p></span>
  <span><img className='bg-black px-5 py-4' src="/images/icon-angle-right.svg" alt="right arrow" /><p className='sr-only'>Right Arrow</p></span>
</div>
      <Navbar 
      toggleNav={toggleNav}
      />
      </div>
      <article className="col-span-2 ">
        <h1 className='font-700 text-4xl'>Discover innovative ways to decorate</h1>  
        <p className='text-darkGrey py-7 text-sm'> We provide unmatched quality, comfort, and style for property owners across the country. 
Our experts combine form and function in bringing your vision to life. Create a room in your 
own style with our collection and make your property a reflection of you and what you love.</p>
<button className='flex items-center gap-6 uppercase tracking-[.6rem]'>Shop Now <img src="/images/icon-arrow.svg" alt="arrow icon" /></button>

</article>
<div className=''>
  <img src="/images/image-about-dark.jpg" alt="dark chairs near the table" />
</div>
<article className=' col-span-2'>  
<h2 className='uppercase tracking-[.27rem] font-700 text-small'>About our furniture</h2>

<p className='text-darkGrey pt-5 text-sm'>Our multifunctional collection blends design and function to suit your individual taste.
Make each room unique, or pick a cohesive theme that best express your interests and what
inspires you. Find the furniture pieces you need, from traditional to contemporary styles
or anything in between. Product specialists are available to help you create your dream space.</p> 
</article>
<div> <img src="/images/image-about-light.jpg" alt="white chair" /></div>
    </div>
    
      {/* <a class="skip-to-content bg-darkGrey font-700" href="#main">Skip to content</a> */}
    </div>
  )
}

export default App
