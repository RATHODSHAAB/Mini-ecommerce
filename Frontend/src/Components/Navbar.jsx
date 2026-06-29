import { Link } from "react-router-dom";

export const Navbar = ({totalCartItems}) => {
    return (
        <>
            <div>
                <div className="w-full h-14 flex justify-center items-center backdrop-blur-2xl gap-10 mt-12 bg-blue-400">
                    <Link className="text-lg font-semibold" to="/">Home</Link>
                    <a className="text-lg font-semibold" href="#">Products </a>
                    <a className="text-lg font-semibold" href="#">Contact Us </a>
                     <Link to="/cart">Cart ({totalCartItems}) </Link>
                </div>
            </div>
        </>
    )
}