import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToDo } from './pages/todo/todo-page'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} exact />
      </Routes>
    </BrowserRouter>
  )
}
