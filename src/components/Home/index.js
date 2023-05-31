import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      isLoading: false,
      teamsList: updatedData,
    })
  }

  renderTeamsCardView = () => {
    const {teamsList} = this.state
    const img = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png'

    return (
      <div className="ipl-container">
        <div className="dashboard-container">
          <img src={img} className="ipl-logo" alt="ipl logo" />
          <h1 className="ipl-heading"> IPL Dashboard </h1>
        </div>

        <ul className="teams-container">
          {teamsList.map(each => (
            <TeamCard key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoadingView() : this.renderTeamsCardView()}
      </div>
    )
  }
}

export default Home
