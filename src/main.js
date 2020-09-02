// Jocks, Bangers, Nerds, Preps, Dweebs, Barbies, Goths

// Intelligence, Attraction, Coolness, Hygiene, Sweetheart: {Dweebs, Bangers}

// Battle Strategies: Avoidance, Rumble, Verbal, Detention, Pranks

// Level-up: Popularity

// sample character State: jock, name: harry potter intelligence: 2, Attraction: 10, Coolness: 8, Hygiene: 6, Sweetheart: {}
// FootBallTeam = changeState() --- where change state updates attraction, coolness, maybe hygiene by 10 - 10 - 6 respectively
// CheerleadTeam = cheerleadState()
// Robotics = changeState()
// DebateTeam = changeState
// footballjock = jock(FootballTeam)

// let Jock = { Intelligence: 1, Attraction: 20, Coolness: 15, Hygiene: 10 }
// let Banger = { Intelligence: 4, Attraction: 8, Coolness: 14, Hygiene: 7 }
// let Nerd = { Intelligence: 20, Attraction: 4, Coolness: 1, Hygiene: 7 }
// let Prep = { Intelligence: 10, Attraction: 15, Coolness: 8, Hygiene: 20 }
// let Dweeb = { Intelligence: 1, Attraction: 0, Coolness: 0, Hygiene: 0 }
// let Barbie = { Intelligence: 7, Attraction: 20, Coolness: 15, Hygiene: 10 }
// let Goth = { Intelligence: 10, Attraction: 5, Coolness: 8, Hygiene: 7 }


// const addAdditionalStateChange = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state [prop] || 0) + value
//     })
//   }
// }

let Template = { Intelligence: 0, Attraction: 0, Coolness: 0, Hygiene: 0 }

const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
      
    })
  }
}

const changeState = (intelNum) => {
  return (attractionNum) => {
    return (coolnessNum) => {
      return (hygieneNum) => {
        return (state) => ({
          ...state,
          Intelligence: (state[Intelligence] || 0) + intelNum, 
          Attraction: (state[Attraction] || 0) + attractionNum,
          Coolness: (state[Coolness] || 0) + coolnessNum,
          Hygiene: (state[Hygenie] || 0) + hygieneNum 
        })
      }
    }
  }
}

jockTemplate = changeState(10)(45)
const Character = storeState(Template);
const updatePlayer = changeState("playerName")

// const jockCHaracter = Character(jockTemplate)




