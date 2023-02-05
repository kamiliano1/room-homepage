import roomLogo from "/public/images/logo.svg"
export default function Navbar() {
    return (
        <div>
            <ul className="flex items-center gap-6 text-white lowercase py-4 ">
                <img src={roomLogo} className="mr-4" alt="room logo" />
                <li><a href="#"> Home</a></li>
                <li><a href="#"> Shop</a></li>
                <li><a href="#"> About</a></li>
                <li><a href="#"> Contact</a></li>
            </ul>


        </div>
    )
}