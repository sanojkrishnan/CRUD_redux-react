import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
