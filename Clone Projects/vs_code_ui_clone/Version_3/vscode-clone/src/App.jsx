import MenuBar from "./components/MenuBar";
import ActivityBar from "./components/ActivityBar";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import Editor from "./components/Editor";
import StatusBar from "./components/StatusBar";

export default function App() {
  return (
    <div className="app">
      <MenuBar />

      <div className="main">
        <ActivityBar />
        <Sidebar />

        <div className="editor-section">
          <Tabs />
          <Editor />
        </div>
      </div>

      <StatusBar />
    </div>
  );
}
