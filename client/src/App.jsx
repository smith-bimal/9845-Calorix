import { BrowserRouter, Routes, Route } from "react-router";
import { LandingPage, ProductPage, ProfilePage } from "./Pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dishes" element={<ProductPage />} />
        <Route path="/user" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
