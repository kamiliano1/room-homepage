import roomLogo from "/images/logo.svg"
export default function Navbar(props) {

    const navClass = props.isActive ? "nav-opened" : ""

    return (
        <nav className="flex items-center justify-between py-10 lowercase px-5 sm:flex-col sm:justify-start lg:flex-row lg:justify-start" >
            <button onClick={props.toggleNav} className="sm:hidden">
                <span className="sr-only">close Navbar</span>
                <img src={`./images/icon-hamburger.svg`} alt="menu logo" />
            </button>
            <img src={roomLogo} className="mx-auto sm:mx-0 sm:self-start lg:ml-14 lg:self-center lg:mr-16 " alt="room logo" />

            {props.currentWidth>703 &&
                <ul className="indicators flex text-white gap-5 sm:self-start sm:mt-3 lg:mt-0">
                    <li><a href="#" aria-selected="true">Home</a></li>
                    <li><a href="#" aria-selected="false">Shop</a></li>
                    <li><a href="#" aria-selected="false">About</a></li>
                    <li><a href="#" aria-selected="false">Contact</a></li>
                </ul>
            }
            <div className={`primary-navigation ${navClass} z-10 fixed left-0 right-0 top-0 bottom-0 bg-black translate-x-full`}aria-expanded={props.isActive}>
                <div className={`z-20 flex items-center justify-between py-10 lowercase bg-white sm:bg-transparent px-5`}>
                    <button onClick={props.toggleNav}>
                        <span className="sr-only">close Navbar</span>
                        <img src={`./images/icon-close.svg`} alt="menu logo" />
                    </button>
                    <ul className="flex gap-5">
                        <li><a href="#" aria-selected="true">Home</a></li>
                        <li><a href="#" aria-selected="false">Shop</a></li>
                        <li><a href="#" aria-selected="false">About</a></li>
                        <li><a href="#" aria-selected="false">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}