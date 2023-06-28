export const calcTip =  function(bill: number, percent: number, numPeople: number){
    return parseFloat(((bill * percent) / numPeople).toFixed(2))
  }
export const calcTotal = function(tip: number, bill: number, numPeople: number){
    return parseFloat(((tip * numPeople + bill) /numPeople).toFixed(2))
  }