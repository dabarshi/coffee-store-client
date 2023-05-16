import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  const coffeeCollection = useLoaderData();

  return (
    <>
      <h1 className='text-6xl text-purple-600'>Our Coffee Collection : {coffeeCollection.length}</h1>
    </>
  )
}

export default App
