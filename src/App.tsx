import { useEffect, useState } from 'react'
import './App.css'
import { State } from './models'
import Header from './components/Header/Header'
import Bill from './components/Bill/Bill'
import Tips from './components/Tips/Tips'
import NumPeople from './components/NumPeople/NumPeople'
import Results from './components/Results/Results'
import Footer from './components/Footer/Footer'

const App:React.FC = () => {
  const [values, setValues] = useState<State>({
    bill: 0,
    tipPercent: 0,
    numPeople: 1,
    tipAmount: 0,
    total: 0
  });

  useEffect( () => {
    console.log(values)
  })

  return (
    <main className="app">
      <Header/>

      <div className='calculator'>
        <section className='inputs'>
          <label>Bill</label>
          <Bill values={values} setValues={setValues}/>

          <span>Select Tip%</span>
          <Tips values={values} setValues={setValues}/>

          <label>Number of People</label>
          <NumPeople values={values} setValues={setValues}/>
        </section>
        <Results values={values} setValues={setValues}/>
      </div>

      <Footer/>
    </main>
  )
}

export default App
