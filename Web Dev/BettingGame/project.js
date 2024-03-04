// 1deposit money
// 2determine number of lines
//3 collect amount
// 4spin the machine
// 5check if the user won 
// 6play again 

// step1
// function deposit(){
//     return 
// }
const prompt = require("prompt-sync")();
// global variables
const ROWS = 3;
const COLS = 3;
// symbols
const symbols_count = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}
// this is multiplier
const symbols_values = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}


const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a Deposit amount: ")
        // convert to a number 
        const numDepositAmount = parseFloat(depositAmount);
        if (isNaN(numDepositAmount) || numDepositAmount <= 0) {
            console.log("Invalid Deposit !! Try Again !!")
        }
        else {
            return numDepositAmount;
        }
    }
}

// step2
const getNumberOfLines = () => {
    while (true) {
        const Lines = prompt("Enter a Number of Lines(1-3): ")
        // convert to a number 
        const noOfLines = parseFloat(Lines);
        if (isNaN(noOfLines) || noOfLines <= 0 || noOfLines > 3) {
            console.log("Invalid Number of lines must be between 1-3 !! Try Again !!")
        }
        else {
            return noOfLines;
        }
    }
}

// step 3 
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the Bet per line : ")
        // convert to a number 
        const noBet = parseFloat(bet);
        if (isNaN(noBet) || noBet <= 0 || noBet > balance / lines) {
            console.log("Invalid Bet!! Try Again !!")
        }
        else {
            return noBet;
        }
    }
}
// step 4
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(symbols_count)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        // push an array
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};
// step 5 
// we need rows using to know whether winning or not 

const transpose = (reels) => {
    const rows = []
    for (let i = 0; i < ROWS; i++) {
        rows.push([])
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }
    return rows;
}
// printrows
const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
};

//  giving the user winnings 
const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * symbols_values[symbols[0]];
        }
    }

    return winnings;
};

// play again last step:
const game = () => {
    let balance = deposit();
    while (true) {
        console.log("You have a balance of $" + balance)
        const noOfLines = getNumberOfLines();
        const bet = getBet(balance, noOfLines)
        balance -= bet * noOfLines;
        // console.log(noOfLines)
        const reels = spin()
        const rows = transpose(reels)
        // console.log(reels)
        console.log(rows)
        printRows(rows)
        const winning = getWinnings(rows, bet, noOfLines)
        balance += winning;
        console.log("You won ,$" + winning.toString())
        if (balance <= 0) {
            console.log("You ran out of Money")
            break;
        }
        const playAgain = prompt("Do you want to play again (y/n)? ");

        if (playAgain != "y") break;
    }

}
// let can also change values 
game()
