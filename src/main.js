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
const joinFootball = changeState(100)(100)(100)(100);
const joinMetalShop = changeState(20)(5)(20)(-8);

//Character template assignments:
const jockCharacter = CharacterJock(jockTemplate);
const bangerCharacter = CharacterBanger(bangerTemplate);
const nerdCharacter = CharacterNerd(nerdTemplate);
const prepCharacter = CharacterPrep(prepTemplate);
const dweebCharacter = CharacterDweeb(dweebTemplate);
const barbieCharacter = CharacterBarbie(barbieTemplate);
const gothCharacter = CharacterGoth(gothTemplate);

//Level up opportunities:
const FootballJock = CharacterJock(joinFootball);
const nerd = CharacterNerd(joinFootball);
console.log(nerd); 

// jockCharacter(Character(storeState(currentState)))
// jockCharacter = storestate()(jocktemplate)
//  jockCharacter = character(jockTemplate)
//  jockCharacter

