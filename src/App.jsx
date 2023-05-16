import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffeeCollection = useLoaderData();
  const [coffeeCollection, setCoffeeCollection] = useState(loadedCoffeeCollection)

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center my-12 text-purple-600'>Our Coffee Collection : {coffeeCollection.length}</h1>

      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffeeCollection.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffeeCollection={coffeeCollection}
            setCoffeeCollection={setCoffeeCollection}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
