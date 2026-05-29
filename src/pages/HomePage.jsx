
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-10 text-center">

                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    🎬 Movie Watchlist
                </h1>

                <p className="text-gray-600 text-lg mb-6">
                    Keep track of your favorite movies, mark them as watched,
                    and manage your personal collection easily.
                </p>

                <div className="flex justify-center gap-4">
                    <Link
                        to="/movies"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        View Movies
                    </Link>

                    <Link
                        to="/login"
                        className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                        Login
                    </Link>
                </div>

                {/* EXTRA SECTION */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-bold text-gray-800">📌 Add Movies</h3>
                        <p className="text-sm text-gray-600">
                            Easily add your favorite movies to your list.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-bold text-gray-800">✔ Track Watched</h3>
                        <p className="text-sm text-gray-600">
                            Mark movies as watched or not watched.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-bold text-gray-800">🗑 Manage List</h3>
                        <p className="text-sm text-gray-600">
                            Delete movies you no longer want.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;