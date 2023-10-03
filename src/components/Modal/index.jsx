import { useState } from 'react'
import './styles.css'

export const Modal = ({ children, label, title }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <>
      <a onClick={handleClick} className='home-nav-item'>{ label }</a>
      {toggle && (
        <div className="modal-container">
          <div className="modal">
            <header>
              <h2>{title}</h2>
              <button onClick={handleClick} className="close">x</button>
            </header>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
