function scuberGreetingForFeet(distance){
  if (distance <= 400) {
  return 'This one is on me!' 

} else if (distance >= 400 && distance <= 2000) {
  return 'That will be twenty bucks.';

} else if (distance >= 2001 && distance <=2499) {
  return 'I will gladly take your thirty bucks.';

} else if (distance > 2500) {
  return 'No can do.'
}

}

function ternaryCheckCity(destination){
  return destination === 'NYC' ? 'Ok, sounds good.' :  'No go.'
}





function switchOnCharmFromTip(tip){
  let tip1 = 'generous';
  let tip2 = 'not as generous';

  switch(tip) {
    case tip1: 'generous'
      return 'Thank you so much.';
    case tip2: 'not as generous'  
      return 'Thank you.';
    default:
      return 'Bye.'  
  }
}


