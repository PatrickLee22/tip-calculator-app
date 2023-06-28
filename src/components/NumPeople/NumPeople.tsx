import './NumPeople.css'
import { calcTip, calcTotal } from "../../helpers"
import { State } from '../../models'

interface Props {
    values: State,
    setValues: React.Dispatch<React.SetStateAction<State>>
}

const NumPeople = ({values, setValues}: Props) =>{
    function setPeople(e: React.ChangeEvent<HTMLInputElement>) {
        const currPeople = parseFloat(e.target.value)
    
        if(values.bill > 0 && values.tipPercent > 0 && currPeople > 0){
          const tip = calcTip(values.bill, values.tipPercent, currPeople)
          setValues({
            ...values, 
            numPeople: currPeople,
            tipAmount: tip,
            total: calcTotal(tip, values.bill, currPeople)
          })
        }
        else{
          setValues({
            ...values,
            numPeople: currPeople
          })
        }
    
    }

    return (
        <input 
            type='number' 
            className="people-input"
            value={values.numPeople || ''}
            onChange={(e) => 
                setPeople(e)
            }
        ></input>
    )
}

export default NumPeople
