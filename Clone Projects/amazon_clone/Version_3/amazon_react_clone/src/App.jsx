import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Menu />
      <Hero />
      <ProductList />
    </div>
  );
}
