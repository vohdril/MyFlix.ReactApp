import './App.css'
import './assets/filme_container_style.css'
import './assets/filme_detalhes_style.css'
import Layout from './components/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParaAssistir from './pages/para_assistir';
import Asssitidos from './pages/asisitidos';
import TodosFilmes from './pages/todos_filmes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Layout />} />
          <Route path="/" element={<Layout />}>
            <Route path="" element={<ParaAssistir />} />
            <Route path="para-assistir" element={<ParaAssistir />} />
            <Route path="assistidos" element={<Asssitidos />} />
            <Route path="todos-filmes" element={<TodosFilmes />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
