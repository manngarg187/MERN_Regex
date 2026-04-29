import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import "./index.css";

export default function App() {

  const trending = [
    "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg",
    "https://image.tmdb.org/t/p/w500/6agKYU5IQFpuDyUYPu39w7UCRrJ.jpg"
  ];

  const topRated = [
    "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "https://image.tmdb.org/t/p/w500/9O1Iy9od7K0F2UjF1JvB6H9tJt.jpg",
    "https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
    "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
  ];

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Row title="Trending Now" movies={trending} />
      <Row title="Top Rated" movies={topRated} />
    </div>
  );
}
