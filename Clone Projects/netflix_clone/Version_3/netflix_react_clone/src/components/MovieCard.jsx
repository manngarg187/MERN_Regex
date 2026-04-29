import "../styles/MovieCard.css";

export default function MovieCard({ image }) {
  return (
    <img className="movie-card" src={image} alt="movie" />
  );
}