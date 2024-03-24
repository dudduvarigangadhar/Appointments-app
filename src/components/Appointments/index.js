import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: ''}

  onAddAppointment = () => {
    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isLiked: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  likeAppointment = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isLiked: !eachAppointment.isLiked}
        }
        return eachAppointment
      }),
    }))
  }

  addTitle = event => {
    this.setState({title: event.target.value})
  }

  addDate = event => {
    this.setState({date: event.target.value})
  }

  filterStarted = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(
        eachAppointment => eachAppointment.isLiked === true,
      ),
    }))
  }

  render() {
    const {appointmentsList, title, date} = this.state

    return (
      <div className="bg-container">
        <div className="appointment-container">
          <div className="top-section-container">
            <div className="appointment-container-field">
              <h1>Add Appointment</h1>
              <label htmlFor="title" className="input-heading">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="input-container"
                onChange={this.addTitle}
                value={title}
              />
              <label htmlFor="date-selection" className="input-heading">
                Date
              </label>
              <input
                type="date"
                id="date-selection"
                className="input-container"
                onChange={this.addDate}
                value={date}
              />
              <button
                className="button"
                type="button"
                onClick={this.onAddAppointment}
              >
                Add
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>

          <div>
            <hr className="horizontal-line" />
            <div className="started-container">
              <h1>Appointments</h1>
              <button
                className="started-button"
                type="button"
                onClick={this.filterStarted}
              >
                Starred
              </button>
            </div>
            <ul className="bottom-section">
              {appointmentsList.map(eachAppointment => (
                <AppointmentItem
                  appointment={eachAppointment}
                  key={eachAppointment.id}
                  likeAppointment={this.likeAppointment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
