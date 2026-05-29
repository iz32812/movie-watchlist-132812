import { useState } from "react";
import { movies as initialMovies } from "../utils/movies";

function MoviesPage() {
    const [movies, setMovies] = useState(initialMovies || []);

    const [form, setForm] = useState({
        title: "",
        director: "",
        genre: "",
        watched: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.title || !form.director) return;

        const newMovie = {
            id: Date.now(),
            ...form,
        };

        setMovies((prev) => [...prev, newMovie]);

        setForm({
            title: "",
            director: "",
            genre: "",
            watched: false,
        });
    };

    const toggleWatched = (id) => {
        setMovies((prev) =>
            prev.map((m) =>
                m.id === id ? { ...m, watched: !m.watched } : m
            )
        );
    };

    const deleteMovie = (id) => {
        setMovies((prev) => prev.filter((m) => m.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            {/* HEADER */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
                🎬 Movie Watchlist
            </h1>

            {/* FORM CARD */}
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4 mb-10"
            >
                <h2 className="text-xl font-semibold text-gray-700">
                    Add New Movie
                </h2>

                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Movie Title"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    name="director"
                    value={form.director}
                    onChange={handleChange}
                    placeholder="Director"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    name="genre"
                    value={form.genre}
                    onChange={handleChange}
                    placeholder="Genre"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="flex items-center gap-2 text-gray-600">
                    <input
                        type="checkbox"
                        name="watched"
                        checked={form.watched}
                        onChange={handleChange}
                        className="w-4 h-4"
                    />
                    Mark as watched
                </label>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    + Add Movie
                </button>
            </form>

            {/* MOVIE LIST */}
            <div className="grid gap-6 max-w-5xl mx-auto">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {movie.title}
                                </h2>

                                <p className="text-gray-600">
                                    🎬 {movie.director}
                                </p>

                                <p className="text-gray-500">
                                    🎭 {movie.genre}
                                </p>

                                <p
                                    className={`mt-2 font-semibold ${
                                        movie.watched
                                            ? "text-green-600"
                                            : "text-red-500"
                                    }`}
                                >
                                    {movie.watched
                                        ? "✔ Watched"
                                        : "✖ Not Watched"}
                                </p>
                            </div>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={() =>
                                    toggleWatched(movie.id)
                                }
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                                Toggle
                            </button>

                            <button
                                onClick={() =>
                                    deleteMovie(movie.id)
                                }
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesPage;