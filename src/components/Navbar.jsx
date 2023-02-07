import roomLogo from "/images/logo.svg"
export default function Navbar(props) {

    const navIcon = props.isActive ? "close" : "hamburger"
    const navClass = props.isActive ? "bg-white opened-navigation" : ""
    const iconMargin = props.isActive ? "mr-auto" : "self-center"


    return (
        <nav className="transition-transform primary-navigation" aria-expanded={props.isActive}>
            <ul className="flex items-center gap-6 text-white lowercase py-4 indicators">
                <img src={roomLogo} className="mr-4" alt="room logo" />
                <li><a href="#" aria-selected="true"> Home</a></li>
                <li><a href="#" aria-selected="false"> Shop</a></li>
                <li><a href="#" aria-selected="false"> About</a></li>
                <li><a href="#" aria-selected="false"> Contact</a></li>
            </ul>
            

            {/* <ul className={`flex text-black gap-1 lowercase  indicators ${navClass} py-6 px-5`}>
                <button onClick={props.toggleNav} className={`md:hidden ${iconMargin}`}><span className="sr-only">close Navbar</span>
                <img src={`./images/icon-${navIcon}.svg`} alt="menu logo" /></button>
                {
                    props.isActive ?
                    <div className="flex gap-4">
                        <li><a href="#" aria-selected="true">Home</a></li>
                        <li><a href="#" aria-selected="false">Shop</a></li>
                        <li><a href="#" aria-selected="false">About</a></li>
                        <li><a href="#" aria-selected="false">Contact</a></li>

                    </div>
                    :
                <img src={roomLogo} className="text-center mx-auto" alt="room logo" />
                }
            </ul> */}



        </nav>
    )
}