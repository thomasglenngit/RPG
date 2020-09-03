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


// const addAdditionalStateChange = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state [prop] || 0) + value
//     })
//   }
// }



const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
      
//     })
//   }
// }

const levelUp = (newStateObj) => {
  return (currentState) => { return ({
    ...currentState,
    ...newStateObj
  }) }
}

const addSweetheart = (Sweetheart) => {
  return (currentState) => { return ({
    Intelligence: Sweetheart.Intelligence + currentState.Intelligence,
    Attraction: Sweetheart.Attraction + currentState.Attraction,
    Coolness: Sweetheart.Coolness + currentState.Coolness,
    Hygiene: Sweetheart.Hygiene + currentState.Hygiene,
    Sweetheart: { ...Sweetheart}
  }) }
}

const breakupSweetheart = (currentState) => { return ({
    Intelligence: currentState.Intelligence - currentState.Sweetheart.Intelligence,
    Attraction: currentState.Attraction - currentState.Sweetheart.Attraction,
    Coolness: currentState.Coolness - currentState.Sweetheart.Coolness,
    Hygiene: currentState.Hygiene - currentState.Sweetheart.Hygiene
  }) 
}



const changeState = (intelNum) => {
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

//Character Store States (everyone starts at 0):
const CharacterJock = storeState();
const CharacterBanger = storeState();
const CharacterNerd = storeState();
const CharacterPrep = storeState();
const CharacterDweeb = storeState();
const CharacterBarbie = storeState();
const CharacterGoth = storeState();

//Character Change States (preset template values):
const jockTemplate = changeState(1)(20)(15)(10);
const bangerTemplate = changeState(4)(8)(14)(7);
const nerdTemplate = changeState(20)(4)(1)(7);
const prepTemplate = changeState(10)(15)(8)(20);
const dweebTemplate = changeState(1)(0)(0)(0);
const barbieTemplate = changeState(7)(20)(15)(10);
const gothTemplate = changeState(10)(5)(8)(7);

const joinFootball = changeState(0)(15)(40)(-20);
const joinMetalShop = changeState(20)(5)(20)(-8);
const joinChessClub = changeState(30)(-10)(-10)(5);
const joinLaCrosse = changeState(5)(10)(10)(-5);
const joinDandD = changeState(0)(-20)(-10)(-2);
const joinCheer = changeState(0)(40)(20)(0);
const joinMetalBand = changeState(8)(5)(-10)(0);

//Character template assignments:
const jockCharacter = CharacterJock(jockTemplate); 
const barbieCharacter = CharacterBarbie(barbieTemplate);
const prepCharacter = CharacterPrep(prepTemplate);
const bangerCharacter = CharacterBanger(bangerTemplate);
const gothCharacter = CharacterGoth(gothTemplate);
const nerdCharacter = CharacterNerd(nerdTemplate);
const dweebCharacter = CharacterDweeb(dweebTemplate);

//Level up opportunities:
const FootballJock = CharacterJock(joinFootball);
const nerd = CharacterNerd(joinFootball);
const jockboyfriend = addSweetheart(prepCharacter)(jockCharacter);
console.log(jockboyfriend);
const heartBrokenJock = breakupSweetheart(jockboyfriend);
console.log(heartBrokenJock);


// 1st: { Intelligence: 11 Attraction: 35 Coolness: 23 Hygiene: 30 SweetHeart: {a;dslfj}}
// 2nd: { Intelligence: 1 Attraction: 20 Coolness: 15 Hygiene: 10 }

// jockCharacter(Character(storeState(currentState)))
// jockCharacter = storestate()(jocktemplate)
//  jockCharacter = character(jockTemplate)
//  jockCharacter

