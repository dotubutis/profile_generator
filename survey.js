const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

const answers = [];

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

// The pyramid of doom
rl.question(questions[0], (answer) => {
  answers.push(answer);
  rl.question(questions[1], (answer) => {
    answers.push(answer);
    rl.question(questions[2], (answer) => {
      answers.push(answer);
      rl.question(questions[3], (answer) => {
        answers.push(answer);
        rl.question(questions[4], (answer) => {
          answers.push(answer);
          rl.question(questions[5], (answer) => {
            answers.push(answer);
            rl.question(questions[6], (answer) => {
              answers.push(answer);
              const result = `${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`;
              console.log(result);
              rl.close();
            });
          });
        });
      });
    });
  });
});
