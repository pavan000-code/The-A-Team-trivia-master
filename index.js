//defining some node packages
var readlineSync=require("readline-sync");
var chalk=require("chalk");
var emoji=require("node-emoji");
var tl=require("terminal-link");
var log=console.log;

//Title Intro
log(chalk.hex("#FDE68A")("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
log(chalk.hex(("#FDE68A"))("~ ")+chalk.redBright.bold("      The A Team Trivia      ")+chalk.hex("#FDE68A")(" ~"));
log(chalk.hex("#FDE68A")("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

//Defining all variables and quiz questions
var userName="";
var userScore=0;
var link="https://www.imdb.com/title/tt0429493/";
var wo=tl('watch the movie online','https://www.hotstar.com/id/movies/the-ateam/1770000917')
var moreInfo=tl('More Info:',`${link}`)


var highScorers=[
  {
    name:"Dharmesh",
    highS:20
  },
  {
    name:"Abhilash",
    highS:17
  },
  {
    name:"Kritarth",
    highS:14
  }
]

var trivia=[
  {
    question:"The movie centered around a fictious team made from which branch of the military?",
    options:["Navy","Air Force","Army","Private Security Firm"],
    answer:"Army"
  },
  {
    question:"Why are the characters on the run?",
    options:["They disobeyed the orders and engaged in illegal activities.","Drug cartels are hunting them across the globe.","They are wanted in 30 countries.","They are being pursued for crimes they didn't commit."],
    answer:"They are being pursued for crimes they didn't commit."
  },
  {
    question:"The head of the team is Hannibal.Who played this character in the movie?",
    options:["Mel Gibson","Liam Neeson","Bruce Willis","Ian McShane"],
    answer:"Liam Neeson"
  },
  {
    question:"Which activity BA Baracus is frightened of?",
    options:["Hand to hand combat","Flying","Killing enemies","Deep Sea Diving"],
    answer:"Flying"
  },
  {
    question:"Real Name of the CIA operative Lynch:",
    options:["Henry Vogelbaum","Vance Burress","HM Murdock","Mary Kom"],
    answer:"Vance Burress"
  },
  {
    question:"Face Peck and Charissa Sosa are?",
    options:["Siblings","Enemies","Couple recovering from breakup","Teammates"],
    answer:"Couple recovering from breakup"
  },
  {
    question:"What does Hannibal love the most?",
    options:["A plan coming together","Breaking out of prison","Distracting the enemies","Performing stunts"],
    answer:"A plan coming together"
  },
  {
    question:"What does Face speak while escaping from General Tuco in Mexico?",
    options:["Never hide Bravery","Tango Charlie Down","Angel has Fallen","Alpha Mike Foxtrot"],
    answer:"Alpha Mike Foxtrot"
  },
  {
    question:"Where did HM Murdock live",
    options:["With his parents","Mental wing of the Veteran's Hospital","With Face and Baracus","At an apartment"],
    answer:"Mental wing of the Veteran's Hospital"
  },
  {
    question:"How many successful operations did the A team perform under General Morrison?",
    options:["40","50","80","120"],
    answer:"80"
  }
]

//Taking and checking UserName
function tandcUN(){
  userName=readlineSync.question("\nState your name:\n")
  if(userName==""){
  log(chalk.yellow("\nPlease Enter a proper Name")+emoji.get(":open_mouth:"))
  tandcUN();
}else{
  log(chalk.hex("#DC2626")("\nWelcome to the trivia ")+chalk.greenBright.underline(userName)+"\n")
}
}

tandcUN();

//Printing Movie Info,Game rules
log(chalk.hex("#A5B4FC").bold("Movie Info: A group of Iraq War veterans look to clear their name with the U.S. Military, who suspect the four men of committing a crime for which they were framed.\n")+chalk.hex("#10B981")("\nYou can "+wo+"\n"+moreInfo))

log(chalk.hex("#3B82F6").underline("\nGame Rules :\n"))

log(chalk.yellowBright("1. This trivia consists of 10 multiple choice questions.\n2. For each correctly answered question, you will be awarded 2 points.\n3. For each incorrectly answered question, you will be deducted 1 point.\n4. For each question you will be given 4 options.\n5. For each question,you will simply type the option number and it will be displayed whether it's right or not.\n")
)

log(chalk.greenBright.underline("HALL OF FAME\n"))
for(i=0;i<highScorers.length;i++){
  log(chalk.hex("#F9A8D4")(highScorers[i].name+"   "+highScorers[i].highS))
}


var response=confirm("Are you ready?\n");
function evaluator(question,options,answer){
  var ask=chalk.magentaBright(question);
  var userIn=readlineSync.keyInSelect(options,ask);
  var userAns=options[userIn];
  if(userAns.toLowerCase()===answer.toLowerCase()){
    userScore=userScore+2;
    log(chalk.green("Yipppeee!!! "+userAns+" is the right answer "+emoji.get(":smile:")));
  }else{
    log(chalk.hex("#78350F")("Unfortunately your answer is incorrect ")+emoji.get(":pensive:"));
    userScore=userScore-1;
    log(chalk.hex("#78350F")(answer+" is the correct answer."))
  }
  log("Total Points Scored: "+userScore);
  log("-------------------------")
}

if(response===false){
  log(chalk.hex("#064E3B")("Hope you find the time to play the game "+emoji.get(":open_mouth:")))
}else{
  for(i=0;i<trivia.length;i++){
    var q=trivia[i].question;
    var op=trivia[i].options;
    var ans=trivia[i].answer;
    var x=i+1;
    log(chalk.hex("#4338CA")("\nQuestion Number "+x));
    evaluator(q,op,ans);
  }
}

log(chalk.red("\nTotal points scored by "+userName+": "+userScore));

var crossed=0;
for(i=0;i<highScorers.length;i++){
  if(userScore>=highScorers[i].highS){
    crossed=crossed+1;
  }
}
if(crossed>0){
  log(chalk.yellowBright("\nCongratulations you are among the high Scorers "+emoji.get(":smiley:")))
}

log(chalk.hex("#A78BFA")("\nThanks for playing "+userName)+emoji.get("wave"))