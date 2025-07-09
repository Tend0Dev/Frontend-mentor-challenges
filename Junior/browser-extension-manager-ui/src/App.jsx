import Header from '@components/Header';
import Filters from '@components/Filters';
import CardContainer from '@components/CardContainer';

function App() {
  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">

      <section className='w-[343px] my-6 md:w-[672px] xl:w-[1170px]'>
        <Header />
        <Filters/>
        <CardContainer/>

      </section>

    </main>
  )
}

export default App
