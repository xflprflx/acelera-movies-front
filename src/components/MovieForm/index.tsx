import { useForm } from 'react-hook-form'
import axios from 'axios'
import env from 'react-dotenv'
import './styles.css'

type FormMovie = {
  title: string;
  subtitle: string;
  resume: string;
  releaseDate: string;
  image: string;
  director: string;
  writer: string;
  classification: string;
  studio: string;
  note: string;
}

export const MovieForm = () => {
  const urlBackend = env.URL_BACKEND
  const { register, handleSubmit } = useForm<FormMovie>()

  const onSubmit = async (formMovie: FormMovie) => {
    try {
      // Fazer a chamada à API
      const response = await axios.post(`${urlBackend}/movies`, formMovie)
      console.log(response.data) // Exibe a resposta da API no console
      // Você pode adicionar lógica para lidar com a resposta da API, como redirecionar para outra página ou exibir uma mensagem de sucesso.
    } catch (error) {
      // Se a chamada falhar, exibir um alert de erro
      console.log(`ERRO ===>>> ${error}`)
      console.log(formMovie)
      alert('Ocorreu um erro ao tentar criar o filme.')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="double-input">
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" {...register('title')} />
          </div>
          <div>
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subtitle" {...register('subtitle')} />
          </div>
        </div>

        <div className="large-input">
          <div>
            <label htmlFor="resume">Resume</label>
            <textarea id="resume" {...register('resume')} />
          </div>
        </div>

        <div className="double-input">
          <div>
            <label htmlFor="release-date">Release Date</label>
            <input type="date" id="release-date" {...register('releaseDate')} />
          </div>

          <div>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" {...register('image')} />
          </div>
        </div>

        <div className="double-input">
          <div>
            <label htmlFor="director">Director</label>
            <input type="text" id="director" {...register('director')} />
          </div>
          <div>
            <label htmlFor="writer">Writer</label>
            <input type="text" id="writer" {...register('writer')} />
          </div>
        </div>

        <div className="double-input">
          <div>
            <label htmlFor="classification">Classification</label>
            <input
              type="text"
              id="classification"
              {...register('classification')}
            />
          </div>
          <div>
            <label htmlFor="studio">Studio</label>
            <input type="text" id="studio" {...register('studio')} />
          </div>
        </div>

        <div className="wide-input">
          <label htmlFor="note">note</label>
          <input type="number" id="note" {...register('note')} />
        </div>
        <div className="btn-container">
          <button className="btn" onClick={handleSubmit(onSubmit)}>
            <h6>Create Movie</h6>
          </button>
        </div>
      </form>
    </>
  )
}
