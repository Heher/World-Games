function dataStatus(state = [], action) {
  const { payload } = action

  switch(action.type) {
    case "REQUEST_USERS" :
      return {
        ...state,
        usersFetching: true
      }

    case "RECEIVE_USERS" :
      return {
        ...state,
        usersFetching: false,
        usersReceived: true
      }

    case "REQUEST_EVENTS" :
      return {
        ...state,
        eventsFetching: true
      }

    case "RECEIVE_EVENTS" :
      return {
        ...state,
        eventsFetching: false,
        eventsReceived: true
      }

    case "REQUEST_COUNTRIES" :
      return {
        ...state,
        countriesFetching: true
      }

    case "RECEIVE_COUNTRIES" :
      return {
        ...state,
        countriesFetching: false,
        countriesReceived: true
      }

    case "REQUEST_REGIONS" :
      return {
        ...state,
        regionsFetching: true
      }

    case "RECEIVE_REGIONS" :
      return {
        ...state,
        regionsFetching: false,
        regionsReceived: true
      }

    case "REQUEST_SETTINGS" :
      return {
        ...state,
        settingsFetching: true
      }

    case "RECEIVE_SETTINGS" :
      return {
        ...state,
        settingsFetching: false,
        settingsReceived: true
      }
    default:
      return state
  }
}

export default dataStatus