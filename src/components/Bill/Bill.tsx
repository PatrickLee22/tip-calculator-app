
import './Bill.css'
import { calcTip, calcTotal } from "../../helpers"
import { State } from "../../models"


interface Props {
    values: State
    setValues: React.Dispatch<React.SetStateAction<State>>
}

const Bill = ({values, setValues}: Props) => {
    function setBill(e: React.ChangeEvent<HTMLInputElement>) {
        const currBill = parseFloat(e.target.value)
    
        if(currBill > 0 && values.tipPercent > 0 && values.numPeople > 0){
          const tip = calcTip(currBill, values.tipPercent, values.numPeople)
          setValues({
            ...values,
            bill: currBill,
            tipAmount: tip,
            total: calcTotal(tip, currBill, values.numPeople)
          })
        }
        else{
          setValues({
            ...values,
            bill: currBill
          })
        }
    }

    return (
        <input 
            type='number' 
            className="bill-input" 
            placeholder='0' 
            value={values.bill || ''}
            onChange={(e) => 
              setBill(e)
            }
        >
        </input>
    )

}


export default Bill