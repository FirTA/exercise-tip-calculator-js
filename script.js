let numberOfPeople = 1

// console.log(document.getElementsById("billTotalInput"))

const getBill = document.getElementById("billTotalInput")
const getTip = document.getElementById("tipInput")


const calculateBill = () => {
    let bill = Number(getBill.value)
    let tip = Number(getTip.value)
    // console.log(typeof billTotalValue +  +""+ typeof tipValue)
    console.log(bill.toPrecision(1))
    let perPerson = (bill+((tip/100)*bill))/numberOfPeople
    console.log("$" + typeof perPerson)
    
    // getBill.value = bill.toPrecision(3)
    document.getElementById("perPersonTotal").innerText = "$" + perPerson.toPrecision(3)
}


const increasePeople = () => {
    let billInput = getBill.value
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