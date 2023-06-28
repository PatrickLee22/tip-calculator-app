import './Results.css'
import { State } from '../../models'

interface Props{
    values: State,
    setValues: React.Dispatch<React.SetStateAction<State>>
}

const Results = ({values, setValues}:Props) => {

    function resetState(){
        setValues({
          bill: 0,
          tipPercent: 0,
          numPeople: 1,
          tipAmount: 0,
          total: 0
        })
    }

    return(
        <section className='results'>
            <div className='tip-result'>
                <div className='tip__label'>
                    <p className='amount-label'>Tip Amount</p>
                    <p className='person-label'>/person</p>
                </div>
                <div className='tip__amount'>
                    <p>${values.tipAmount}</p>
                </div>
            </div>
            <div className='total-result'>
                <div className='total__label'>
                    <p className='amount-label'>Total</p>
                    <p className='person-label'>/person</p>
                </div>
                <div className='total__amount'>
                    <p>${values.total}</p>
                </div>
            </div>

            <button 
                className='resetButton'
                onClick={(e) => resetState()}     
            >
                Reset
            </button>
        </section>
    )
}

export default Results