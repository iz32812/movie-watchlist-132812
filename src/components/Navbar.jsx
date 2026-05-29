import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link
                    to="/"
                    className="text-2xl font-extrabold tracking-wide hover:text-blue-400 transition"
                >
                    🎬 MovieWatch
                </Link>

                <div className="flex items-center gap-6">

                    <Link to="/" className="hover:text-blue-400 transition font-medium">
                        Home
                    </Link>

                    <Link to="/movies" className="hover:text-blue-400 transition font-medium">
                        Movies
                    </Link>

                    {!user ? (
                        <Link
                            to="/login"
                            className="bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
                        >
                            Login
                        </Link>
                    ) : (
                        <div className="flex items-center gap-4">

                            <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                👤 {user.name}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="bg-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;