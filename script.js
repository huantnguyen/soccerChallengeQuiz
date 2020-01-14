//Sound button
var sound = document.getElementById("myAudio"); 

function playAudio() { 
  sound.play(); 
} 

//Question data
const STORE = [
  {
    question: "It is a penalty! You slowly walk to the spot to prepare for the kick while the goalkeeper is provoking you with ridiculous shouts and pointing his hand to the right of the goal..... How would you kick the ball?", 
    answers: [
      "Hah! Let's beat the keeper at his own mind game by kicking the ball with so much power to the upper right corner ofcourse.",
      "Dang! He might be tricking me not to kick to the left so maybe a shot to the upper left corner would get him.",
      "Man his mind game is making me pretty nervous. Perhaps I will choose a safe option and put the ball in the middle of the goal",
      "I have a trick up my sleeve too! I will make a ridiculously slow run towards the ball that makes him become nervous and impatient. Then, I will kick the ball softly to the lower corner or either the right or left."
    ],
    correctAnswer:
      "I have a trick up my sleeve too! I will make a ridiculously slow run towards the ball that makes him become nervous and impatient. Then, I will kick the ball softly to the lower corner or either the right or left."
  },
  {
    question: "Now you have earn your team a free kick! The spot is a little bit outside of the penalty box to the left of the goal. While discussing options with your teammates, you notice that goalkeeper is standing more towards the right side of the goal and the players wall has some noticeable whole in between. So, what is your choice this time?", 
    answers: [
      "I will try to bend the ball towards the upper corner of the goal. The keeper standing there does not mean he can stop my powerful kick!",
      "Hmmm, a wise choice would be bending the ball towards the upper left corner of the goal. Surely the goalkeeper can not reach it in time.",
      "Well I can try to aim well and put the ball bewtween the wall or maybe under the wall hoping that they would jump. That will suprise the goalkeeper for sure!",
      "Lets be a good team player and pass the ball to a teammate with more open angle to perform the shot."
    ],
    correctAnswer:
      "Hmmm, a wise choice would be bending the ball towards the upper left corner of the goal. Surely the goalkeeper can not reach it in time."
  },
  {
    question: "Your teammate just made a really percise pass to you that eliminates the opponent's defense which leaves you in a 1-on-1 situation with the goalkeeper. Lets keep our composure and decide what to do.", 
    answers: [
      "I have been practicing some ball lobbing so lets be cheeky and show the crowd my skill by lobbing the ball over the goalkeeper.",
      "Just use all the power I have to shoot the ball as strong as possible toawrds the goal. I don't think the goalkeeper can react in time!",
      "I don't know if the keeper is good at using his foot or not, but maybe I will score if I put the ball nice and slowly on the ground.",
      "Lets look for another teammate and pass the ball to him so he can score more easily with an open goal!"
    ],
    correctAnswer:
      "I have been practicing some ball lobbing so lets be cheeky and show the crowd my skill by lobbing the ball over the goalkeeper."
  },
  {
    question: "Your team is in desperate need of your help in defense! The other team just won back the ball and they are organizing a quick counter-attack. It is looking dangerous! How would you react?", 
    answers: [
      "Oh no, I am really tired so I will just lightly jog back to show my effort and let my teammate handle it.",
      "I will just try to mark the closest man near me to limit the opponent's options.",
      "Shout at my teammate and try to help them get into better position because you have a good view of the field.",
      "Run back as fast as you can and tackle the guy with the ball hoping that you will at most get a yellow card."
    ],
    correctAnswer:
      "Run back as fast as you can and tackle the guy with the ball hoping that you will at most get a yellow card."
  },
  {
    question: "Last important decision of the game and you need to decide quickly as the captain! It is the 80th minutes and the other team just scored an equaliser. Your team is losing the composure, players begin to panick and blaming, shouting at each other when the game still has 10 minutes to go. How would you help your team?", 
    answers: [
      "They are right to be shouting at each other. Maybe by blaming others, the players will come to an agreement and realize their mistakes.",
      "I will try my very best to score the winning goal for the team ofcourse! Well because I am that good?",
      "Oh my god!!! These guys are so bad, maybe I should transfer to another freaking team. At least they are not blaming me for anything so I am safe.",
      "Try to calm down my team and encourages them to focus in order to score another goal without conceeding a goal as well."
    ],
    correctAnswer:
      "Try to calm down my team and encourages them to focus in order to score another goal without conceeding a goal as well."
  }
]


//Create variable to store the number of goals and misses
let score = 0;
let miss = 0;


//Genereate question elements
//function generateQuestionElement(item)


function startQuiz() {
  $('.questionBox').hide();
  $('.completion').hide();
  $('.mainBox').on('click', '.startQuiz', function (event) {
    $('.mainBox').hide();
    $('.completion').show();
    $('.questionBox').show();
    //$('.questionBox').prepend(generateQuestion());
  });
}


//Main function
function main() {
  startQuiz();
}

$(main);