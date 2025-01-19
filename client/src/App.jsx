import { BrowserRouter, Routes, Route } from "react-router";
import { LandingPage, ProductPage, ProfilePage,NotFoundPage } from "./Pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dishes/:id" element={<ProductPage />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
