import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { LandingPage, ProductPage, ProfilePage, NotFoundPage } from "./Pages";
import ProtectedRoute from "./Pages/ProtectedRoutes";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dishes/:id" element={<ProductPage />} />
          <Route path="/user" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
