alert(`Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer.

You will draw numbers from 1 to 10. The computer will stop at 16.

Pay attention to the screen to see what your total is.`)

var pscore = 0

var cscore = 0
do {
    do{
        var comp = 0

        var play = 0

        var eleven = 0

        alert(`Now... it is computer's turn.`)

        do {
            var num = (Math.floor(Math.random() * 10) + 1)

            if (num == 1) {

                eleven = 11

                num = eleven
            }

            comp += (num)

            if ((comp > 20) && (eleven == 11)) {
                comp -= 10
            }

            alert(`The new number is ${num}.
            
            Computer Total: ${comp}.`)
            
        } while (comp < 16)

        eleven = 0

        if (comp > 20) {
            break;
        }

        alert(`Computer will stop at ${comp}.`)

        alert(`Now it is user's turn.`)  

        do {
            var num = (Math.floor(Math.random() * 10) + 1)

            if (num == 1) {

                eleven = 11

                num = eleven
            }

            play += (num)

            if ((play > 20) && (eleven == 11)) {
                play -= 10
            }

            alert(`Your new number is ${num}.
            
            Your Current Total: ${play}.
            
            The computer's total is ${comp}`)

            if (play > 20) {
                break;
            }

            var ask = prompt(`Would you like another number? If you would like to stop press 'n'.`)
        } while (ask != "n")

        alert(`You stopped at ${play}`)

        var done = true

    } while (done = false)

    if (comp > 20) {
        pscore++
    
        alert(`The computer went over 20! You won!`)
    
        alert(`Player score: ${pscore}; Computer Score: ${cscore}.`)
    } else if (play > 20) {
        cscore++
    
        alert(`You went over 20! The computer won!`)
    
        alert(`Player score: ${pscore}; Computer Score: ${cscore}.`)
    } else if (play > comp) {
        pscore++
    
        alert(`You won!`)
    
        alert(`Player score: ${pscore}; Computer Score: ${cscore}.`)
    } else if (comp > play) {
        cscore++
    
        alert(`The computer won!`)
    
        alert(`Player score: ${pscore}; Computer Score: ${cscore}.`)
    } else {
        alert(`You tied! No points awarded.`)
    }

    var want = prompt(`Would you like to continue playing? If yes press 'y', if no press 'n'.`)

    done = false

} while (want == "y")

alert(`Final Score
Computer: ${cscore}
Player: ${pscore}`)


// add: 1) persistent computer score next to user's score 2) computer needs to stop >= 16 (not over) 3) do not ask me for cards if computer goes above 20 4) collin will explain the 11 rule 5) collin will explain the points rule