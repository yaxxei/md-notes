import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { StatusBar } from "./components/StatusBar";
import { useActionBarContext } from "./context/ActionBarContext";
import { useStore } from "./store/rootStore";

function App() {
  const { isHeaderVisible, isStatusBarVisible } = useActionBarContext();

  const { noteStore } = useStore();
  const noteId = "note-1";
  const note = noteStore.getNoteById(noteId)!;

  return (
    <div className="container">
      {isHeaderVisible && (
        <div className="header-container">
          <Header note={note} />
        </div>
      )}
      <Main note={note} />
      {isStatusBarVisible && <StatusBar />}
    </div>
  );
}

export default App;
