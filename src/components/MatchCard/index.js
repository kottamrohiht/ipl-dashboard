import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = item

  const matchStatusCss = matchStatus === 'Won' ? 'won' : 'loss'

  return (
    <li className="list-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingTeam-Logo"
      />
      <p className="competingTeam"> {competingTeam} </p>
      <p className="result"> {result} </p>
      <p className={matchStatusCss}> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
