let numberOfPeople = 1

// console.log(document.getElementsById("billTotalInput"))

const getBillTotalValue = document.getElementById("billTotalInput")
const getTipValue = document.getElementById("tipInput")


const calculateBill = () => {
    let billTotalValue = getBillTotalValue.value
    let tipValue = getTipValue.value
    console.log(billTotalValue +""+ tipValue)
    let result = numberOfPeople*billTotalValue+((tipValue/100)*billTotalValue)
    console.log("$" + result)
    
    document.
    getElementById("perPersonTotal").innerText = result.toPrecision(3)
}


const increasePeople = () => {
    let billInput = getBillTotalValue.value
    console.log(billInput)
    numberOfPeople += 1
    console.log(numberOfPeople)
    document.getElementById("numberOfPeople").innerHTML = `${numberOfPeople}`
    calculateBill()
    return numberOfPeople
}


const decreasePeople = () => {
    if (numberOfPeople > 1){
        numberOfPeople -= 1
    }
    console.log(numberOfPeople)
    document.getElementById("numberOfPeople").innerHTML = `${numberOfPeople}`
    calculateBill()
    return numberOfPeople
}

// document.getElementById("numberOfPeople").innerHTML = `${numberOfPeople}`