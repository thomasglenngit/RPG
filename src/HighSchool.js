// Jocks, Bangers, Nerds, Preps, Dweebs, Barbies, Goths

// Intelligence, Attraction, Coolness, Hygiene, Sweetheart: {Dweebs, Bangers}

// Battle Strategies: asking people on dates

// Level-up: character hierarchy: dweeb, nerd, goth, banger, prep, barbie, jock

// sample character State: jock, name: harry potter intelligence: 2, Attraction: 10, Coolness: 8, Hygiene: 6, Sweetheart: {}
// FootBallTeam = changeState() --- where change state updates attraction, coolness, maybe hygiene by 10 - 10 - 6 respectively
// CheerleadTeam = cheerleadState()
// Robotics = changeState()
// DebateTeam = changeState
// footballjock = jock(FootballTeam)




export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const changeProp = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value 
      
    })
  }
}

export const levelUp = (currentState) => {
  if (currentState.Intelligence && currentState.Attraction && currentState.Coolness && currentState.Hygiene >= 600) {
    return {...currentState, level: "Jock"}
  }
}

export const levelOut = (newStateObj) => {
  return (currentState) => { return ({
    ...currentState,
    ...newStateObj
  }) }
}


export const addSweetheart = (Sweetheart) => {
  return (currentState) => { return ({
    Intelligence: Sweetheart.Intelligence + currentState.Intelligence,
    Attraction: Sweetheart.Attraction + currentState.Attraction,
    Coolness: Sweetheart.Coolness + currentState.Coolness,
    Hygiene: Sweetheart.Hygiene + currentState.Hygiene,
    Sweetheart: { ...Sweetheart}
  }) }
}

export const breakupSweetheart = (currentState) => { return ({
    Intelligence: currentState.Intelligence - currentState.Sweetheart.Intelligence,
    Attraction: currentState.Attraction - currentState.Sweetheart.Attraction,
    Coolness: currentState.Coolness - currentState.Sweetheart.Coolness,
    Hygiene: currentState.Hygiene - currentState.Sweetheart.Hygiene
  }) 
}

export const changeState = (intelNum) => {
  return (attractionNum) => {
    return (coolnessNum) => {
      return (hygieneNum) => {
        return (state) => ({
          ...state,
          Intelligence : (state.Intelligence || 0) + intelNum, 
          Attraction: (state.Attraction || 0) + attractionNum,
          Coolness: (state.Coolness || 0) + coolnessNum,
          Hygiene: (state.Hygiene || 0) + hygieneNum 
        })
      }
    }
  }
}


// winOrNo: 0; --> winOrNo: 1;

// if(totalScore > 700){
//   winOrNo: 1;
// }