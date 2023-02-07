import { useState } from 'react'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const [currentArticle, setCurrentArticle] = useState(0)


  const articleData = [
    {
      id:1,
      title: "Discover innovative ways to decorate",
      description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      picture:""
    },
    {
      id:2,
      title: " We are available all across the globe",
      description:"With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      picture:""
    },
    {
      id:3,
      title: "Manufactured with the best materials",
      description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      picture:""
    },
  ]

  function nextArticle() {
    // console.log(currentArticle,articleData.length)
    setCurrentArticle(prev=>{
      return prev === articleData.length-1 ? prev = 0 : prev+1
    })
  }
  function previousArticle() {
    setCurrentArticle(prev=>{
      return prev === 0 ? articleData.length-1 : prev-1
    })
  }
  function toggleNav() {
    setIsActive(prev=>!prev)
  }

  const styles = {
    backgroundImage: isActive ? "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/images/mobile-image-hero-1.jpg')" : `url('/images/desktop-image-hero-${currentArticle+1}.jpg')`
  }

  return (
    <div className='container mx-auto'>
      <div className={isActive?  "nav-activated" : ""}></div>

    <div className="h-screen sm:grid sm:grid-rows-67/33 sm:grid-cols-20/80 " >

    {/* <div className="logo col-span-2 bg-[url('/images/mobile-image-hero-1.jpg')] bg-no-repeat bg-cover h-320 bg-left-bottom relative "> */}
    <div className="hero-img col-span-2 bg-left-bottom relative bg-no-repeat  bg-cover"style={styles}>
    {/* <div className="logo col-span-2 bg-no-repeat bg-cover h-320 bg-left-bottom relative "> */}
      <div className='flex absolute bottom-0 right-0'>
  <button onClick={previousArticle}><img className='bg-black px-5 py-4' src="/images/icon-angle-left.svg" alt="left arrow" /><p className='sr-only'>Left Arrow</p></button>
  <button onClick={nextArticle}><img className='bg-black px-5 py-4' src="/images/icon-angle-right.svg" alt="right arrow" /><p className='sr-only'>Right Arrow</p></button>
</div>
<div className='ml-[4rem] mt-[2rem]'>
      <Navbar 
      toggleNav={toggleNav}
      isActive={isActive}
      />

</div>
      </div>
      <article className="col-span-2 self-center px-32">
        <h1 className='font-700 text-4xl'>{articleData[currentArticle].title}</h1>  
        <p className='text-darkGrey py-7 text-sm'>{articleData[currentArticle].description}</p>
<button className='flex items-center gap-6 uppercase tracking-[.6rem]'>Shop Now <img src="/images/icon-arrow.svg" alt="arrow icon" /></button>

</article>
<div className=''>
  <img src="/images/image-about-dark.jpg" alt="dark chairs near the table" />
</div>
<article className=' col-span-2 '>  
<h2 className='uppercase tracking-[.27rem] font-700 text-small'>About our furniture</h2>

<p className='text-darkGrey pt-5 text-sm'>Our multifunctional collection blends design and function to suit your individual taste.
Make each room unique, or pick a cohesive theme that best express your interests and what
inspires you. Find the furniture pieces you need, from traditional to contemporary styles
or anything in between. Product specialists are available to help you create your dream space.</p> 
</article>
<div> <img src="/images/image-about-light.jpg" className='w-[700px]' alt="white chair" /></div>
    </div>

    </div>
  )
}

export default App
