import roomLogo from "/images/logo.svg"
export default function Navbar(props) {


    return (
        <div>
            {/* <ul className="flex items-center gap-6 text-white lowercase py-4 indicators">
                <img src={roomLogo} className="mr-4" alt="room logo" />
                <li><a href="#" aria-selected="true"> Home</a></li>
                <li><a href="#" aria-selected="false"> Shop</a></li>
                <li><a href="#" aria-selected="false"> About</a></li>
                <li><a href="#" aria-selected="false"> Contact</a></li>
            </ul> */}
            

            <ul className="flex items-center text-black gap-1 lowercase indicators bg-white py-6 px-5">
                <button onClick={props.toggleNav} className="mr-auto"><span className="sr-only">close Navbar</span>
                <img src="./images/icon-close.svg" alt="room logo" /></button>
                {/* <img src={roomLogo} className="mr-4" alt="room logo" /> */}
                <li><a href="#" aria-selected="true"> Home</a></li>
                <li><a href="#" aria-selected="false"> Shop</a></li>
                <li><a href="#" aria-selected="false"> About</a></li>
                <li><a href="#" aria-selected="false"> Contact</a></li>
            </ul>



        </div>
    )
}