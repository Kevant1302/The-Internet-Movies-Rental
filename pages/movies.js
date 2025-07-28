import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchMovies = async () => {
    const res = await fetch("/api/movies");
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movieData = {
      title,
      actors: actors.split(",").map((a) => a.trim()),
      releaseYear,
    };

    if (editId) {
      await fetch(`/api/movies/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movieData),
      });
    } else {
      await fetch("/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movieData),
      });
    }

    resetForm();
    fetchMovies();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this movie?")) {
      await fetch(`/api/movies/${id}`, { method: "DELETE" });
      fetchMovies();
    }
  };

  const handleEdit = (movie) => {
    setTitle(movie.title);
    setActors(movie.actors.join(", "));
    setReleaseYear(movie.releaseYear);
    setEditId(movie.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setTitle("");
    setActors("");
    setReleaseYear("");
    setEditId(null);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          {editId ? "Edit Movie" : "Add New Movie"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow max-w-lg mb-10"
        >
          <input
            type="text"
            placeholder="Movie Title"
            className="w-full border rounded px-4 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Actors (comma separated)"
            className="w-full border rounded px-4 py-2"
            value={actors}
            onChange={(e) => setActors(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Release Year"
            className="w-full border rounded px-4 py-2"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {editId ? "Update Movie" : "Add Movie"}
            </button>
            {editId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <h2 className="text-2xl font-bold mb-6">Movies List</h2>
        {movies.length === 0 ? (
          <p className="text-gray-600">No movies found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {movie.title}
                  </h3>
                  <p className="text-gray-700 mb-1">
                    <span className="font-bold">Year:</span> {movie.releaseYear}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-bold">Actors:</span>{" "}
                    {movie.actors.join(", ")}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(movie)}
                    className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
