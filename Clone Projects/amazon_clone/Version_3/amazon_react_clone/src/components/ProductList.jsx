import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

export default function ProductList() {
  const products = [
    {
      title: "Electronics",
      image: "https://images.unsplash.com/photo-1510557880182-3a935c6bba0d"
    },
    {
      title: "Fashion",
      image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53"
    },
    {
      title: "Home Decor",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    {
      title: "Beauty",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    }
  ];

  return (
    <div className="products">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}