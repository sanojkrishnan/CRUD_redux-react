import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import NavBar from "./Components/NavBar";
import Read from "./Components/Read";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
