import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
