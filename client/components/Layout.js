import React from "react"
import { Link } from "react-router"

import Header from './Header'
import AdminSection from './admin/AdminSection'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchEvents()
    this.props.fetchCountries()
    this.props.fetchRegions()
    this.props.fetchSettings()
  }

  render() {
    const { users, currentUser, dataStatus, settings, regions } = this.props

    if (dataStatus.usersReceived && dataStatus.settingsReceived) {
      const userDrafting = this.props.users.filter(user => {
        return user.draftNum === this.props.settings.userTurn
      })[0]

      let canDraft = false
      let pickNumber = 0

      regions.map(region => {
        pickNumber = pickNumber + region.maxNumberSelected
      })

      if (currentUser) {
        if ((settings.userTurn === currentUser.draftNum) && settings.round < pickNumber) {
          canDraft = true
        }
      }

      const createProps = {
        ...this.props,
        userDrafting,
        canDraft
      }

      return (
        <div>
          <Header {...this.props} userDrafting={userDrafting} canDraft={canDraft} />
          {React.cloneElement(this.props.children, createProps)}
        </div>
      )
    } else {
      return (
        <div>
          <Header {...this.props} />
          <h2>Loading</h2>
        </div>
      )
    }
  }
}