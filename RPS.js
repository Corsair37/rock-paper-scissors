function getComputerChoice () {
    let Number = Math.random(3) 
    if (Number === 0) {
        return "Rock"
    } else if (Number === 1){
        return "Paper"
    } else if (Number === 2){
        return "Scissors"
    }
        
    }

console.log(getComputerChoice())