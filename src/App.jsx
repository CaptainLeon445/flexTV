import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details"
import React from "react";

const LazyHome= React.lazy(() => import("./pages/Home"))
const LazyDetails= React.lazy(() => import("./pages/Details")) 
function App() {
    return (
    <>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="details/:id" element={<LazyDetails />}></Route>

      </Routes>
    </>
  )
}

export default App
