'use strict';
console.log('about me');
var score = 0;
score;
var greetings = ('Welcome!');
alert('Greetings '+ greetings);
var nameOfTheUser =prompt ('What is your name?');

alert('welcome  '+ nameOfTheUser);
console.log('user name is '+nameOfTheUser);

function whatYouLoveFun(){
  var whatYouLove =prompt ('Do you know where Ethiopia is? ');

  if(whatYouLove.toLowerCase() === 'yes'|| whatYouLove.toLowerCase() === 'y')
  {
    alert(' Cool!');
    score+=1;
  }
  else{
    alert('Its located in Eastern part of Africa.');
  }
  console.log('user answer is '+ whatYouLove);
}
function cityFun(){
  var city=prompt('Do you think am originally form Ethiopia?');
  if(city.toLowerCase() === 'yes'||city.toLowerCase() === 'y'){
    alert('you got it!');
    score+=1;
  }
  else{
    alert('Am originally for Ethiopia');
  }
  console.log('user answer is '+ city);
}

function tribesFun(){
  var tribes=prompt('Do you know there are more than 80 tribes in Ethiopia?');
  if(tribes.toLowerCase() === 'yes'||tribes.toLowerCase() === 'y')
  {
    alert('Yes! there are more than 80 tribes!');
    score+=1;
  }
  else{
    alert(' There are more than 80 tribes!');
  }
  console.log('user answer is '+ tribes);
}

function monthsFun(){
  var months=prompt('Do you know Ethiopia has 13months in year?');
  if(months.toLowerCase() === 'yes'||months.toLowerCase() === 'y')
  {
    alert('Yeah!');
    score+=1;
  }
  else{
    alert(' Ethiopia AKA called 13months sunshine!');
  }
  console.log('user answer is '+ months);
}

function redFoxFun(){
  var redFox=prompt('Do you know Red fox only extsisted in Ethiopia?');
  if(redFox.toLowerCase() === 'yes'||redFox.toLowerCase() === 'y')
  {
    alert('Yes you got it!');
    score+=1;
  }
  else{
    alert('Red fox is only found in Ethiopia!');
  }
  console.log('user answer is '+ redFox);
}

function chancesFun(){
  var chances = 4;
  while (chances > 0) {
    chances = chances -1;//check
    var guess=prompt('Guess my lucky number 1-5');
    var myNumber = '4';
    if(guess === '4' || guess.toLowerCase() === 'four')
    {
      alert('Correct!');
      score+=1;
      break;
    } else if(guess !== myNumber){
      if(guess < myNumber)

        alert('too low');
      else if(guess> myNumber)
        alert('too high');
    }
  }
}

function trySportFun(){
  var trySport = 6;
  while (trySport>0){
    trySport=trySport-1;
    var sport = ['soccer','baseball','football','basketball','teniss','swimming','running'];
    var askSport = prompt('Guess one of my faviorite sports? ');

    if(sport.includes(askSport.toLowerCase())){
      alert ('yeah!');
      score+=1;
      trySport = 0;
    } else {
      alert('incorrect');
    }
  }

  console.log('your answer is ' + askSport);
}
function listAnswer (){
  whatYouLoveFun();
  cityFun();
  tribesFun();
  monthsFun();
  redFoxFun();
  chancesFun();
  trySportFun();
}
listAnswer();
console.log('the user score '+ score);
alert( 'You got '+ score +' correct');
