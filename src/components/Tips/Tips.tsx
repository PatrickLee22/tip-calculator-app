
import './Tips.css'
import { calcTip, calcTotal } from "../../helpers"
import { State } from "../../models"


interface Props {
    values: State
    setValues: React.Dispatch<React.SetStateAction<State>>
}

const Tips = ({values, setValues}: Props) => {

    function setTip(e: React.ChangeEvent<HTMLInputElement>) {
        const currPercent = parseFloat(e.target.value)
    
        if(values.bill > 0 && currPercent > 0 && values.numPeople > 0){
          const tip = calcTip(values.bill, currPercent, values.numPeople)
          setValues({
            ...values, 
            tipPercent: currPercent,
            tipAmount: tip,
            total: calcTotal(tip, values.bill, values.numPeople)
          })
        }
        else{
          setValues({
            ...values,
            tipPercent: currPercent
          })
        }
    }

    return (
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
    )
}

export default Tips;