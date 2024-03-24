import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointment, likeAppointment} = props
  const {id, isLiked, title, date} = appointment

  const onLikeButton = () => {
    console.log('liked button')
    likeAppointment(id)
  }

  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const like = isLiked ? 'star' : 'star'

  const formatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  return (
    <li className="appointment-box">
      <div className="appointments-subheading">
        <p className="title">{title}</p>
        <button
          data-testid="star"
          type="button"
          className="star-image"
          onClick={onLikeButton}
        >
          <img src={imgUrl} alt={like} />
        </button>
      </div>
      <p className="date"> Date: {formatedDate}</p>
    </li>
  )
}

export default AppointmentItem
