import Menu from "./components/Menu";
import "./styles/App.css";
import Menu from "./components/Menu";
import MenuData from "./data/data";
function App() {
  return <Menu menu={Meny} />;
  // Hovedkomponenten (App): Denne komponenten importerer menydata og sender dem videre som props til en underkomponent.
}

export default App;
