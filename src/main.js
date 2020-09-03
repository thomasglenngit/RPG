import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const jockTemplate = changeState(1)(20)(15)(10);//600+
const barbieTemplate = changeState(7)(20)(15)(10);//500+
const prepTemplate = changeState(10)(15)(8)(20);//400+
const bangerTemplate = changeState(4)(8)(14)(7);//300+
const gothTemplate = changeState(10)(5)(8)(7);//200+
const nerdTemplate = changeState(20)(4)(1)(7);//100+
const dweebTemplate = changeState(1)(0)(0)(0);//1+

  //Character Store States (everyone starts at 0):
  const CharacterJock = storeState();
  const CharacterBanger = storeState();
  const CharacterNerd = storeState();
  const CharacterPrep = storeState();
  
  const CharacterBarbie = storeState();
  const CharacterGoth = storeState();
  
  //Character Change States (preset template values):
  
  //Clubs
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
  // const dweebCharacter = CharacterDweeb(dweebTemplate);
  
  //Level up opportunities:
  const FootballJock = CharacterJock(joinFootball);
  const nerd = CharacterNerd(joinFootball);
  const jockboyfriend = addSweetheart(prepCharacter)(jockCharacter);
  console.log(jockboyfriend);
  const heartBrokenJock = breakupSweetheart(jockboyfriend);
  console.log(heartBrokenJock);
  const dweebToNerd = levelUp(dweebCharacter)(nerdCharacter);
  console.log(dweebToNerd);
  
  // jockCharacter(Character(storeState(currentState)))
  // jockCharacter = storestate()(jocktemplate)
  //  jockCharacter = character(jockTemplate)
  //  jockCharacter

$(document).ready(function() {
  $("#hs-form").submit(function (event) {
    event.preventDefault();
    
    const ourCharacter = { name: $("#character").val("") }
    const CharacterDweeb = storeState(ourCharacter);
    const dweebCharacter = CharacterDweeb(dweebTemplate);
    
        
    $("#club-form").show();
    $("#join").onclick()
    
  });
  
});