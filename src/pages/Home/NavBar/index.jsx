import './styles.css'
import { Modal } from '../../../components/Modal'
import { MovieForm } from '../../../components/MovieForm'

export const NavBar = () => {
  return (
    <nav className="home-nav-container">
      <div className="home-item-container">
        <h3 className="home-nav-item">Hello, User!</h3>
        <ul>
          <li>
            <Modal title="Cadastro" label="Add Movie">
              <MovieForm />
            </Modal>
          </li>
        </ul>
      </div>
    </nav>
  )
}
