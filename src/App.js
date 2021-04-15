import logo from "./logo.svg";
import Rigth from "./components/Rigth";
import Left from "./components/Left";
import TopBar from "./components/topBar";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        maxHeight: '100vh',
      }}
    >
      <TopBar />
      <div style={{ 
        height: 'calc(100% - 60px)',
        display: 'flex',
       }}>
        <Left />
        <Rigth />
      </div>
    </div>
  );
}

export default App;
