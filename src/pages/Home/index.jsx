import { MovieCard } from '../../components/MovieCard'
import { NavBar } from './NavBar'
import { useEffect, useState } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

import './styles.css'

export const Home = () => {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true) // Adicionando um estado para controlar o carregamento

  const urlBackend = env.URL_BACKEND

  useEffect(() => {
    axios
      .get(`${urlBackend}/movies`)
      .then((response) => {
        setList(response.data)
        setIsLoading(false) // Marca o carregamento como concluído quando a resposta é recebida
        console.log(`Aqui ====>>>${list[0].image}`)
      })
      .catch((error) => {
        console.error('Erro ao obter dados da API:', error)
        setIsLoading(false) // Certifica-se de que o carregamento está marcado como concluído mesmo em caso de erro
      })
  }, [])

  return (
    <div className="home-container">
      <NavBar className="navbar"/>
      <div className="catalog-container">
        <h1 className="header-container">All Movies</h1>
        {isLoading
          ? (
          <p>Carregando...</p>
            )
          : list.length === 0
            ? (
          <p>Nenhum filme disponível.</p>
              )
            : (
                list.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              releaseDate={movie.releaseDate}
              image={movie.image}
              resume={movie.resume}
            />
                ))
              )}
      </div>
    </div>
  )
}
