const userName = prompt('What is your name?');
console.log('User\'s name is', userName);

const savedName = userName;
alert('Hi ' + savedName + '. Welcome to the questionaire!');

// ***No matter user response, alert is 'Awesome!'{
let affirmative = ('Yes');
const likesCoffee = (affirmative);
prompt('Do you like coffee?');

if(likesCoffee){
    alert('Awesome! It\'s one of my favorite things.');
    console.log(savedName + ' likes coffee.');
}
else {
    alert('Maybe we shouldn\'t talk anymore.');
}
// ***No matter user response, alert is 'Awesome!'}

const favoriteFood = prompt('What is your favorite food?');
console.log(savedName + '\'s favorite food is', favoriteFood + '.');

alert ('Nice ' + savedName + '! I like ' + favoriteFood + ' too!');

var likesCars = confirm('Do you like cars? Click "OK" for Yes, or "Cancel" for no.');
console.log(savedName + ' likes cars.');

if(likesCars){
    alert('That\'s great! Me too!');
}
else {
    alert('That\'s not good. Stop eating ' + favoriteFood + ', and that will change.');
}