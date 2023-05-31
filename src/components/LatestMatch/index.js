import './index.css'

const LatestMatch = props => {
  const {recentMatchDetails} = props
  const {
    date,
    venue,
    result,
    competingTeamLogo,
    competingTeam,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = recentMatchDetails

  return (
    <div className="latest_match_container">
      <div className="team-name-container">
        <div>
          <p className="team-Name1"> {competingTeam} </p>
          <p className="date"> {date} </p>
          <p className="venue"> {venue} </p>
          <p className="venue"> {result} </p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingTeamLogo"
        />
      </div>
      <hr className="line" />

      <div className="team-name-container1">
        <div>
          <h1 className="team-Name"> First Innings </h1>
          <p className="venue"> {firstInnings} </p>
          <p className="team-Name"> Second Innings </p>
          <p className="venue"> {secondInnings} </p>
          <h1 className="team-Name"> Man Of The Match </h1>
          <p className="venue"> {manOfTheMatch} </p>
          <h1 className="team-Name"> Umpire </h1>
          <p className="venue"> {umpires} </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
