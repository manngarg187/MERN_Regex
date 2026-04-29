import MovieCard from "./MovieCard";
import "../styles/Row.css";

export default function Row({ title, movies }) {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((img, index) => (
          <MovieCard key={index} image={img} />
        ))}
      </div>
    </div>
  );
}