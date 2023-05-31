import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {item} = props
  const {id, name, teamImageUrl} = item

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="each-team-container">
        <img src={teamImageUrl} alt={name} className="teamImageUrl" />
        <p className="name"> {name} </p>
      </li>
    </Link>
  )
}

export default TeamCard
