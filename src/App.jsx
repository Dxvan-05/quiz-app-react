
import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { UserContext } from './components/UserContext'
import { UserForm } from './components/UserForm'
import { Question } from './components/Question'
import Results from './components/Results'
import { Route, Routes } from 'react-router-dom'
import { questions, elements, keywords } from './constants/index.js'


function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState ([]);
  const [pokemonImage, setPokemonImage] = useState(null);
  const [element, setElement] = useState('');
  const [name, setName] = useState('');

  function resetForm() {
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }

  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  function determineElement(answers) {
    const counts = {};
    answers.forEach(function(answer) {
      const element = elements[answer];
      counts[element] = (counts[element] || 0) + 1;
    });
    return Object.keys(counts).reduce(function(a, b) {
      return counts[a] > counts[b] ? a : b
    });
  };

  const fetchPokemonImage = async (keyword) => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}`);
    const pokemonData = await request.json();
    const pokemonId = pokemonData.id;

    const imageRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`); 
    const imageData = await imageRequest.json();
    setPokemonImage(imageData.sprites.front_default);
  }

  useEffect(
    function () {
      if (currentQuestionIndex === questions.length) {
        const selectedElement = determineElement(answers);
        setElement(selectedElement);
        fetchPokemonImage(keywords[selectedElement]);
      }
    },
    [currentQuestionIndex]
  );
  


  return (
    <>
    <Header />
    <UserContext.Provider value={{name, setName}}>
    <Routes>
      <Route path="/" exact element={<UserForm />}></Route>
      <Route path="/quiz" exact element={
         currentQuestionIndex < questions.length ? (
          <Question question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} onAnswer={handleAnswer} />
        ) : (
          <Results element={element} image={pokemonImage} onClick={resetForm} />
        )
      }></Route>
    </Routes>
    </UserContext.Provider>
    
    </>
  )
}

export default App
