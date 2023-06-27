import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import Results from './components/Results/Results'

interface State{
  bill: number;
  tipPercent: number;
  numPeople: number;
  tipAmount: number;
  total: number;
}

function App() {
  const [values, setValues] = useState<State>({
    bill: 0,
    tipPercent: 0,
    numPeople: 1,
    tipAmount: 0,
    total: 0
  });

  function setTip(e) {
    setValues({...values, tipPercent: parseFloat(e.target.value)})
  }

  function resetState(){
    setValues({
      bill: 0,
      tipPercent: 0,
      numPeople: 1,
      tipAmount: 0,
      total: 0
    })
  }


  useEffect( () => {
    if(values.bill > 0 && values.tipPercent > 0 && values.numPeople > 0){
      /* values.tipAmount = parseFloat(((values.bill * values.tipPercent) / 100 / values.numPeople).toFixed(2)) */
      let tip = parseFloat(((values.bill * values.tipPercent) / 100 / values.numPeople).toFixed(2))
      values.tipAmount = Math.round((tip * 100))/ 100
      values.total = parseFloat(((values.tipAmount * values.numPeople + values.bill) /values.numPeople).toFixed(2))
    }
    
    console.log(values)
  }, [values.bill, values.tipPercent, values.numPeople, values.tipAmount, values.total])

  return (
    <main className="app">
      <Header/>

      <div className='calculator'>
        <section className='inputs'>
          <label>Bill</label>
          <input 
            type='number' 
            className="bill-input" 
            placeholder='0' 
            value={values.bill || ''}
            onChange={(e) => 
              setValues({...values, bill: parseFloat(e.target.value)})
            }
          >
          </input>
          <span>Select Tip%</span>
          <div className='tips'
              data-value={values.tipPercent || ''}
              onClick={(e) =>
                setTip(e)
              }
          >
            <button id='btn-models' value="0.05">5%</button>
            <button value="0.1">10%</button>
            <button value="0.15">15%</button>
            <button value="0.25">25%</button>
            <button value="0.5">50%</button>
            <input 
              type="number" 
              className="custom-input" 
              placeholder='Custom'
              value={values.tipPercent || ''}
              onChange={(e) =>
                setValues({...values, tipPercent: (parseFloat(e.target.value) || 0)})
              }
              
            ></input>
          </div>

          <label>Number of People</label>
          <input 
            type='number' 
            className="people-input"
            value={values.numPeople || ''}
            onChange={(e) =>
              setValues({...values, numPeople: parseInt(e.target.value)})
            }
          ></input>
        </section>
        <section className='results'>
          <div className='tip-result'>
            <div className='tip__label'>
              <p className='amount-label'>Tip Amount</p>
              <p className='person-label'>/person</p>
            </div>
            <div className='tip__amount'>
            <p>{values.tipAmount}</p>
            </div>
          </div>
          <div className='total-result'>
            <div className='total__label'>
              <p className='amount-label'>Total</p>
              <p className='person-label'>/person</p>
            </div>
            <div className='total__amount'>
              <p>{values.total}</p>
            </div>
          </div>

          <button 
            className='resetButton'
            onClick={(e) => resetState()}     
            >Reset</button>

        </section>
      </div>

      <Footer/>
    </main>
  )
}

export default App
