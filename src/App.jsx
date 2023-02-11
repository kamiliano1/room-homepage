import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import articleData from './data/articlesData'
function App() {
  const [isActive, setIsActive] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [currentArticle, setCurrentArticle] = useState(0)
  const [currentSize, setCurrentSize] = useState(null) 

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
    windowWidth>703 ? setIsActive(false) : ""
    windowWidth>703 ? setCurrentSize("desktop") : setCurrentSize("mobile")

  },[windowWidth])

  const styles = {
    backgroundImage : currentSize === "desktop" ? `url(${articleData[currentArticle].picture.desktop})`
    : `url(${articleData[currentArticle].picture.mobile})`,
  }

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
    <div className='max-w-[1440px] mx-auto sm:p-5 '>
      <div className="h-screen sm:grid sm:grid-rows-midScreen sm:grid-cols-midScreen lg:grid-cols-bigScreen lg:grid-rows-bigScreen" >
        <div style={styles} className={`col-span-2 row-span-2 bg-no-repeat bg-cover h-320 bg-bottom bg-slate-500 relative sm:h-full`}>
          <Navbar 
            toggleNav={toggleNav}
            isActive={isActive}
            currentWidth={windowWidth}
          />
          <div className='absolute -bottom-2 right-0 sm:hidden'>
            <button className='' onClick={previousArticle}><img className='bg-black px-4 py-3' src="/images/icon-angle-left.svg" /><p className='sr-only'>Left Arrow</p></button>
            <button className='' onClick={nextArticle}><img className='bg-black px-4 py-3' src="/images/icon-angle-right.svg" /><p className='sr-only'>Right Arrow</p></button>
          </div>
       </div>

       <article className="col-span-2 sm:px-cl sm:mx-auto sm:max-w-md sm:m-0">
          <h1 className='font-700 text-4xl'>{articleData[currentArticle].title}</h1>  
          <p className='text-darkGrey py-7 text-sm h-[170px]'>{articleData[currentArticle].description}</p>
          <button className='flex items-center gap-6 uppercase tracking-[.6rem] hover:opacity-40'>Shop Now 
            <img src="/images/icon-arrow.svg" alt="arrow icon" />
          </button>
        </article>

        <div className='col-start-3 row-start-2 hidden  sm:flex'>
          <button className='' onClick={previousArticle}><img className='bg-black hover:bg-black/60 aspect-square h-full p-7' src="/images/icon-angle-left.svg" /><p className='sr-only'>Left Arrow</p></button>
          <button onClick={nextArticle}><img className='bg-black hover:bg-black/60 aspect-square  h-full p-7' src="/images/icon-angle-right.svg" /><p className='sr-only'>Right Arrow</p></button>
        </div>

        <div className='row-start-4 col-span-2 lg:row-start-3 lg:col-span-1 lg:col-start-1 max-w-[700px]'>
          <img src="/images/image-about-dark.jpg" 
          className='w-[100%] ' alt="dark chairs near the table" />
        </div>

        <article className='row-start-3 col-span-4 lg:row-start-3 lg:col-start-2 lg:col-span-2 max-w-[400px] sm:max-w-xl mx-auto  sm:py-cl2'>  
          <h2 className='uppercase tracking-[.27rem] font-700 text-small'>About our furniture</h2>

          <p className='text-darkGrey pt-5 text-sm max-w-[460px]'>Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
          </p> 
        </article>

        <div className='row-start-4 col-span-2 lg:row-start-3 max-w-[700px]'>
          <img src="/images/image-about-light.jpg" className='w-[100%] ' alt="white chair" />
        </div>
      </div>
    </div>
  )
}

export default App



