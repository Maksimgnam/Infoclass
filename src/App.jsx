import { useState, useEffect } from 'react'
import './App.css'
import Loader from './Components/Loader/Loader'
import Main from './Components/Main/Main'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="App">
      {
        isLoading ? (

          <Loader />



        ) : (
          <Main />
        )
      }




    </div>
  )
}

export default App

