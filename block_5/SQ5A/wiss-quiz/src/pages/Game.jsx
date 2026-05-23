import GameSession from "../components/GameSession";


const questions = [
{
  text: "Welches Studio hat das Spiel: \"Minecraft\" entwickelt?",
  answers: ["Valve","Mojang","Ubisoft","Rockstar Games"],
  correctAnswer: "Mojang",
},
{
  text: "Wann ist das Spiel: \"The Witcher 3\" erschienen?",
  answers: ["2013","2015","2017","2011"],
  correctAnswer: "2015",
},
{
  text: "Welche Konsole wurde von Nintendo veröffentlicht?",
  answers: ["PlayStation 2","Xbox 360","Nintendo Switch","Steam Deck"],
  correctAnswer: "Nintendo Switch",
},
{
  text: "Wer ist der Hauptcharakter in: \"The Legend of Zelda\"?",
  answers: ["Zelda","Link","Ganondorf","Mario"],
  correctAnswer: "Link",
},
{
  text: "Welches Spiel gehört zum Genre Battle Royale?",
  answers: ["FIFA 24","Fortnite","The Sims 4","Need for Speed"],
  correctAnswer: "Fortnite",
},
{
  text: "Wann ist das Spiel: \"Grand Theft Auto V\" erschienen?",
  answers: ["2010","2013","2016","2018"],
  correctAnswer: "2013",
},
{
  text: "In welchem Spiel kämpft man gegen Creeper?",
  answers: ["Terraria","Minecraft","Roblox","Rust"],
  correctAnswer: "Minecraft",
},
{
  text: "Welche Firma entwickelt die \"PlayStation\"?",
  answers: ["Microsoft","Nintendo","Sony","Sega"],
  correctAnswer: "Sony",
},
{
  text: "Wie heißt der Klempner aus den Nintendo-Spielen?",
  answers: ["Luigi","Bowser","Mario","Toad"],
  correctAnswer: "Mario",
},
{
  text: "Welches Spiel ist bekannt für den Satz: \"The cake is a lie\"?",
  answers: ["Portal","Half-Life","BioShock","DOOM"],
  correctAnswer: "Portal",
},
];


function Game() {
  return (
    <div>
      <h1>Quiz</h1>
      <GameSession questions={questions} />
    </div>
  );
}

export default Game;