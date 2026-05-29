import { movies } from "../utils/movies";

function MoviesPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Movies
            </h1>

            <div className="grid gap-4">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="p-4 border rounded-lg shadow-sm bg-white"
                    >
                        <h2 className="text-xl font-semibold">
                            {movie.title}
                        </h2>

                        <p className="text-gray-700">
                            <strong>Director:</strong> {movie.director}
                        </p>

                        <p className="text-gray-700">
                            <strong>Genre:</strong> {movie.genre}
                        </p>

                        <p className="text-gray-700">
                            <strong>Watched:</strong>{" "}
                            {movie.watched ? "Yes" : "No"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesPage;