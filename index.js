function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!"
  }
  else if (400 < feet && feet < 2000) {
    return "That will be twenty bucks."
  }
  else if (2000 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return"No can do."
  }
}

function ternaryCheckCity(city){
  switch (city) {
    case 'NYC':
      return "Ok, sounds good."
      break;
      default:
        return "No go."
        break;
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }
}

