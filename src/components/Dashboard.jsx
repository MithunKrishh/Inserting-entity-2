import React from 'react';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Movie Collection</h1>
        <button className="add-movie-btn" onClick={() => navigate("/add-movie")}>
          + Add Movie
        </button>
      </header>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
