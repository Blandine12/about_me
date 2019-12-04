'use strict';
console.log('about me');

var greetings = ('Welcome!');
alert('Greetings');
var nameOfTheUser =prompt ('What is your name?');

alert('welcome again '+ nameOfTheUser);
console.log('Your name is '+nameOfTheUser);

var whatYouLove =prompt ('Do you know where Ethiopia is? ');

if(whatYouLove.toLowerCase() === 'yes'|| whatYouLove.toLowerCase() === 'y')
{
  alert(' Cool!');
}
else{
  alert('Its located in east Africa.');
}
console.log('Your answer is '+ whatYouLove);
var city=prompt('Do you think am originally form Ethiopia?');
if(city.toLowerCase() === 'yes'||city.toLowerCase() === 'y'){
  alert('you got it!');
}
else{
  alert('Am originally for Ethiopia');
}
console.log('Your answer is '+ city);
var tribes=prompt('Do you know there are more than 80 tribes in Ethiopia?');
if(tribes.toLowerCase() === 'yes'||tribes.toLowerCase() === 'y')
{
  alert('Yes! there are more than 80 tribes!');
}
else{
  alert(' There are more than 80 tribes!');
}
console.log('Your answer is '+ tribes);
var months=prompt('Do you know Ethiopia has 13months in year?');
if(months.toLowerCase() === 'yes'||months.toLowerCase() === 'y')
{
  alert('Yea!');
}
else{
  alert(' Ethiopia AKA called 13months sunshine!');
}
console.log('Your answer is '+ months);    
var redFox=prompt('Do you know Red fox only extsisted in Ethiopia?');
if(redFox.toLowerCase() === 'yes'||redFox.toLowerCase() === 'y')
{
  alert('yes!');
}
else{
  alert('Red fox is only found in Ethiopia!');
}
console.log('Your answer is '+ redFox);     
      
      
      // var nameOfHobby =prompt ('Name one sport you like? ');
      // var bestColor =prompt ('Indoor or outdoor?')
      // console.log('The user said their name was ');
      // alert('Hello! '+ nameOfTheUser +','+' Welcome to my site!' +'You live in '+ whereYouLive +', ' + nameOfHobby +' is your sport '+'and ' + ' you like it when you play '+bestColor);