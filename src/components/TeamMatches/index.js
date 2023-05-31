import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    recentMatchDetails: {},
    bannerUrl: '',
    id: '',
    isLoading: true,
    name: '',
    previousMatches: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const latestMatchDetails = data.latest_match_details
    const teamBannerUrl = data.team_banner_url
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const matchCardDetails = data.recent_matches
    const updatedMatchCardDetails = matchCardDetails.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
    }))

    const teamUrl = 'https://apis.ccbp.in/ipl'
    const teamResponse = await fetch(teamUrl)
    const teamData = await teamResponse.json()
    const updatedData = teamData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    const teamName = updatedData.filter(each => each.id === id)

    this.setState({
      recentMatchDetails: updatedLatestMatchDetails,
      id,
      bannerUrl: teamBannerUrl,
      isLoading: false,
      name: teamName[0].name,
      previousMatches: updatedMatchCardDetails,
    })
  }

  renderTeamDetails = () => {
    const {recentMatchDetails, bannerUrl, name, previousMatches} = this.state

    return (
      <div className="bannerContainer">
        <img src={bannerUrl} alt="team banner" className="team-img" />
        <p className="latest-matches"> Latest Matches </p>
        <LatestMatch name={name} recentMatchDetails={recentMatchDetails} />
        <ul className="un-list-container">
          {previousMatches.map(each => (
            <MatchCard key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#0f172a" height={50} width={50} />
    </div>
  )

  render() {
    const {id, isLoading} = this.state

    return (
      <div className={`team-math-container ${id}`}>
        {isLoading ? this.renderLoadingView() : this.renderTeamDetails()}
      </div>
    )
  }
}

export default TeamMatches
