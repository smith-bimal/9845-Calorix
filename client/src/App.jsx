import { BrowserRouter, Routes, Route } from "react-router";
import { LandingPage, ProductPage, ProfilePage,NotFoundPage } from "./Pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dishes" element={<ProductPage />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
