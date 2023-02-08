import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
function App() {
  const [isActive, setIsActive] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [currentArticle, setCurrentArticle] = useState(0)

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  },[])

  useEffect(()=>{
    windowWidth>650 ? setIsActive(false) : ""

  },[windowWidth])

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



  return (
    <div className='max-w-[1440px] mx-auto md:px-9'>
      <div className="h-screen sm:grid sm:grid-rows-67/33 sm:grid-cols-20/80" >



      {/* Głowne */}
        <div className={`col-span-2 row-span-2 bg-[url("/images/mobile-image-hero-${currentArticle}.jpg")] bg-no-repeat bg-cover h-320 bg-center-left
         bg-slate-500 relative sm:h-full sm:bg-[url('/images/desktop-image-hero-${currentArticle+1}.jpg')]
        `}>
          <Navbar 
            toggleNav={toggleNav}
            isActive={isActive}
            currentWidth={windowWidth}
          />
          <div className='absolute bottom-0 right-0 sm:hidden'>
            
            <button className='' onClick={previousArticle}><img className='bg-black px-4 py-3 ' src="/images/icon-angle-left.svg" alt="left arrow" /><p className='sr-only'>Left Arrow</p></button>
            <button className='' onClick={nextArticle}><img className='bg-black px-4 py-3' src="/images/icon-angle-right.svg" alt="right arrow" /><p className='sr-only'>Right Arrow</p></button>
          </div>
       </div>


        {/* Artykul */}
        <article className="col-span-2 px-cl flex flex-col justify-center">
          <h1 className='font-700 text-4xl'>{articleData[currentArticle].title}</h1>  
          <p className='text-darkGrey py-7 text-sm h-[190px]'>{articleData[currentArticle].description}</p>
          <button className='flex items-center gap-6 uppercase tracking-[.6rem] hover:opacity-40'>Shop Now <img src="/images/icon-arrow.svg" alt="arrow icon" /></button>
        </article>


        {/* Guziki */}
        <div className='col-start-3 row-start-2 hidden sm: bg-gray-200 sm:flex'>
          <button className='' onClick={previousArticle}><img className='bg-black hover:bg-black/60 aspect-square h-full p-7' src="/images/icon-angle-left.svg" alt="left arrow" /><p className='sr-only'>Left Arrow</p></button>
          <button onClick={nextArticle}><img className='bg-black hover:bg-black/60 aspect-square  h-full p-7' src="/images/icon-angle-right.svg" alt="right arrow" /><p className='sr-only'>Right Arrow</p></button>
        </div>

        {/* Ciemny */}
        <div className='row-start-3 col-start-1 max-w-[700px]'>
          <img src="/images/image-about-dark.jpg" 
          className='w-[100%]' alt="dark chairs near the table" />
        </div>


        {/* Staly artykul */}
        <article className='row-start-3 col-start-2 col-span-2 justify-self-center'>  
        <h2 className='uppercase tracking-[.27rem] font-700 text-small'>About our furniture</h2>

        <p className='text-darkGrey pt-5 text-sm'>Our multifunctional collection blends design and function to suit your individual taste.
        Make each room unique, or pick a cohesive theme that best express your interests and what
        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
        or anything in between. Product specialists are available to help you create your dream space.</p> 
        </article>

        {/* Biala fotka */}
        <div className='row-start-3 max-w-[700px]'>
          <img src="/images/image-about-light.jpg" className='w-[100%]' alt="white chair" />
        </div>
      </div>
    </div>
  )
}

export default App



