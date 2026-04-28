import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="main-content">

        <Card 
          title="Web Development" 
          teacher="Mr. Sharma" 
          color="#1a73e8" 
        />

        <Card 
          title="Business Analytics" 
          teacher="Prof. Gupta" 
          color="#34a853" 
        />

        <Card 
          title="Java Programming" 
          teacher="Dr. Singh" 
          color="#fbbc04" 
        />

      </main>
    </>
  );
}

export default App;
