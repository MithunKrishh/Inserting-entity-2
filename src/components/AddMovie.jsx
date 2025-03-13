import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ addMovie }) => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        genre: "",
        releaseYear: "",
        synopsis: "",
        posterUrl: "",
    });

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!movie.title || !movie.director || !movie.releaseYear || !movie.posterUrl) {
            alert("Please fill in all required fields.");
            return;
        }
        addMovie(movie); // Add new movie
        navigate("/"); // Redirect to Dashboard
    };

    return (
        <div className="add-movie">
            <h2>Add a New Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
                <input type="text" name="director" placeholder="Director" onChange={handleChange} required />
                <select name="genre" onChange={handleChange} required>
                    <option value="">Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Science Fiction">Science Fiction</option>
                </select>
                <input type="number" name="releaseYear" placeholder="Release Year" onChange={handleChange} required />
                <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange}></textarea>
                <input type="text" name="posterUrl" placeholder="Poster Image URL" onChange={handleChange} required />

                <button type="submit">Submit</button>
                <button type="button" onClick={() => navigate("/")}>Cancel</button>
            </form>
        </div>
    );
};

export default AddMovie;
