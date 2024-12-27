import { useState } from 'react'
import './App.css'

function App() {
  const [matchingWords,setMatchingWords] = useState("");

  const findAndMatch = async (wordToMatch) => {
    if(!wordToMatch){
      setMatchingWords("");
      return;
    }
      
      try{
        const response = await fetch("https://dummyjson.com/users").then(prom => prom.json()).then(data => data.users);
        if(!response) throw new Error;
        const matchedWords = response.map(word => word.firstName.includes(wordToMatch) ? word.firstName : null)
        setMatchingWords(matchedWords);
      }catch(error){
        console.log(error);
      }
    

  }

  return (
    <>
      <form>
        <input type="text" placeholder='enter a user' onChange={(e) => findAndMatch(e.target.value)} />
      </form>
      <ul>
        {matchingWords && 
          matchingWords.map(word => <li>{word}</li>)
        }
      </ul>
    </>
  )
}

export default App
