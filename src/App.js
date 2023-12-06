import { useState } from 'react';
import './App.css';


function App() {
  
  const [text,settext] = useState('');
  const [author,setauthor] = useState('');

  async function randomQuote(){
    const responce = await fetch("https://api.quotable.io/random");
    const data = await responce.json();
    settext(data.content);
    setauthor(data.author);
  }

  return (
    <div className="App">
      <div className="quote-text">Random text :- {text}</div>
      <div className='quote-author'>Author name :-{author} </div>
      <button id='new-quote' onClick={randomQuote}>New text</button>
    </div>
  );
}

export default App;
