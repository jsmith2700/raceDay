let raceNumber = Math.floor(Math.random() * 1000);
//let runnerEarly = false;
let runnerAge = 22;
runnerEarly = true;
//console.log(`${runnerAge}`)
if (runnerEarly && runnerAge > 18);{
  raceNumber += 1000;
  //console.log(raceNumber)
  console.log(`Your race number is: ${raceNumber}.`)
 
}

if (runnerEarly && runnerAge >= 18){
  console.log(`You'll be racing at 9:30 a.m, runner ${raceNumber}.`)
} else if (!runnerEarly && runnerAge >= 18){
  console.log(`You'll be racing at 11:00 a.m since you registered late, runner ${raceNumber}.`)
} else if (runnerAge < 18) {
  console.log(`You'll be racing at 12:30 p.m and your runner: ${raceNumber}.`)
}
