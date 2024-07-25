import "./App.css";

function App() {
  const sentences = [
    "Happy Birthday!",
    "get better.",
    "we love you!",
    "eat trash",
    "Why are you here?",
    "Do you think there are others out there?",
    "MooOoo 🐄",
    "Who let the dogs out?",
    "What does the fox say?",
    "Hey :D",
    "Get out of here",
    "...knock, knock?",
  ];

  return <h1>{sentences[Math.floor(Math.random() * sentences.length)]}</h1>;
}

export default App;
