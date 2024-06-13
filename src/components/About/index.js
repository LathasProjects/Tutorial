// Write your JS code here

import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

function About() {
  return (
    <div className="about-container">
      <Header />
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  )
}

export default About
