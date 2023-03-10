import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/list" element={<List></List>}></Route>
        <Route path="/list/:id" element={<Hotel></Hotel>}></Route>
      </Routes>
    </div>
  );
}

export default App;
