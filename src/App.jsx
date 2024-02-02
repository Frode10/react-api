import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(res => {
        console.log(res.data.content)
        setQuote(res.data.content)
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <div className='App'>

      <button onClick={getQuote}> Get quote</button>
      {quote && <p>{quote}</p>}

    </div >
  );





}

export default App
