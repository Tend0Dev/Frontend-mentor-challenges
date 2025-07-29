import Header from '@components/Header';
import Filters from '@components/Filters';
import CardsContainer from '@components/CardContainer';
import { useState } from 'react';

function App() {

  const [filter, setFilter] = useState('All')

  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">

      <section className='w-[343px] my-6 md:w-[672px] xl:w-[1170px]'>
        <Header />
        <Filters filter = {filter} setFilter={setFilter}/>
        <CardsContainer filter= {filter} />

      </section>

    </main>
  )
}

export default App
