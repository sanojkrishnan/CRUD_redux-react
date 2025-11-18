import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import NavBar from "./Components/NavBar";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
