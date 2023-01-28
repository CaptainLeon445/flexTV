// import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details"
import React from "react";
// const LazyAbout = React.lazy(() => import("./components/about"))

const LazyHome= React.lazy(() => import("./pages/Home"))
function App() {
    return (
    <>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="details" element={<Details />}></Route>

      </Routes>
    </>
  )
}

export default App
