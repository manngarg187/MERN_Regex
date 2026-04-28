import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Categories from "./components/Categories";
import EmailList from "./components/EmailList";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <Sidebar />

        <div className="content">
          <Categories />
          <EmailList />
        </div>
      </div>
    </div>
  );
}
