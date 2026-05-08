import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

function Navbar () {
    return(
        <div className="flex justify-end bg-gray-300 text-black text-sm gap-6">
            <Link className="font-bold" to="/">Home</Link>
            <Link className="font-bold" to="/owner">Owner</Link>
        </div>
    )
}

export default Navbar;