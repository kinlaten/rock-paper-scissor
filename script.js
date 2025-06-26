function getComputerChoice(){
    // to get value 1,2 or 3
    return Math.floor(Math.random() * 10) % 3 + 1

}

function getHumanChoice(){
    choice = prompt('Choose: rock, paper or scissor?').toLowerCase()
    return choice === 'rock' ? 1 : choice == 'paper' ? 2 : choice == 'scissor' ? 3 : null
}

function main(){
    choice_computer = getComputerChoice()
    choice_human = getHumanChoice()
    choice_computer_text = choice_computer == 1 ? 'rock' : choice_computer == 2 ? 'paper': choice_computer == 3 ? 'scissor' : null
    if (choice_human == null){
        alert('Invalid choice')
        return
    }

    alert(`Computer choice is ${choice_computer_text}`)

    if(choice_computer == choice_human){
        alert('Tied')
        return
    }
    else if (choice_computer == 1 && choice_human == 3){
        alert('You lose')
        return
    }
    else if (choice_computer > choice_human){
        alert('You lose')
        return
    }
    else{
        alert('You win')
        return
    }
}

while(true){
    main()
}