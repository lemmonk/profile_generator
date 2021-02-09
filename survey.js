const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let count = 0;
let answers = [];

const survey = () => {

  let qs = ["what's your name?","What's an activity you like doing?","hat do you listen to while doing that?","What's your favourite thing to eat for that meal?"];

  rl.question(qs[count], (answer) => {
    count++;
    answers.push(answer);
    if (count >= qs.length) {
      
      console.log(`Hello fellow humans, my name is ${answers[0]}. I enjoy ${answers[1]} while listening to the sweets sounds of ${answers[2]}.  If you're ever in the mood for ${answers[3]} drop me a line, it's my favorite!`);
      rl.close();
      return;
    }
    
    survey();
  });


};

survey();



