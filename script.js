let numberOfPeople = 1

const calculateBill = () => {

}

const increasePeople = () => {
    numberOfPeople += 1
    console.log(numberOfPeople)
    document.getElementById("numberOfPeople").innerHTML = `${numberOfPeople}`
    return numberOfPeople
}

const decreasePeople = () => {
    if (numberOfPeople > 1){
        numberOfPeople -= 1
    }
    console.log(numberOfPeople)
    document.getElementById("numberOfPeople").innerHTML = `${numberOfPeople}`
    return numberOfPeople
}

// document.getElementById("numberOfPeople").innerHTML = `${numberOfPeople}`