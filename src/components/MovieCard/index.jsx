import { format } from 'date-fns'
import './styles.css'

export const MovieCard = (props) => {
  const { title, releaseDate, resume, note, image } = props
  const isoDate = releaseDate
  const date = new Date(isoDate)
  const formattedDate = format(date, 'dd MMMM yyyy')
  return (
    <div className="card-container">
      <div className="img-container base-card">
        <img src={image} alt={title} />
      </div>
      <div className="content-container">
        <div className="top-content-container">
          <div className="title-container">
            <h1>{title}</h1>
            <p><span>Date:</span>{`${formattedDate}`}</p>
          </div>
          <img src={note} alt={note} />
        </div>
        <div className="bottom-content-container">
          <h3>Resume:</h3>
          <p>{resume}</p>
        </div>
      </div>
    </div>
  )
}
