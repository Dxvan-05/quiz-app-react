
import './App.css'
import { Header } from './components/Header'
import { UserProvider } from './components/UserContext'
import { UserForm } from './components/UserForm'

function App() {

  const questions = [
    {
      question: "What's your favorite way to spend a weekend?",
      options: ["Exploring", "Relaxing", "Socializing", "Adventuring"],
    },
    {
      question: "Which of these best describes your personality?",
      options: ["Brave", "Calm", "Playful", "Wise"],
    }
  ];

  const elements = {
    "Exploring": "Charizard",
    "Relaxing": "Snorlax",
    "Socializing": "Pikachu",
    "Adventuring": "Lucario",
  };

  return (
    <>
    <Header />
    <UserProvider children={ <UserForm /> } />
    
    </>
  )
}

export default App
