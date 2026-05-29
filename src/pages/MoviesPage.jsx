import { useState } from "react";
import { movies as initialMovies } from "../utils/movies";

function MoviesPage() {
    const [movies, setMovies] = useState(initialMovies);

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

        // validation
        if (!form.title.trim() || !form.director.trim()) {
            alert("Title and Director are required!");
            return;
        }

        const newMovie = {
            id: Date.now(),
            ...form,
        };

        setMovies([...movies, newMovie]);

        // reset form
        setForm({
            title: "",
            director: "",
            genre: "",
            watched: false,
        });
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Movies
            </h1>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="mb-8 p-4 border rounded bg-white space-y-3"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />

                <input
                    type="text"
                    name="director"
                    placeholder="Director"
                    value={form.director}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />

                <input
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    value={form.genre}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="watched"
                        checked={form.watched}
                        onChange={handleChange}
                    />
                    Watched
                </label>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add Movie
                </button>
            </form>

            {/* MOVIES LIST */}
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