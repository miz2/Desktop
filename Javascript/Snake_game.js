const prompt= require("prompt-sync")();
console.log('---------- Snake, Water, Gun Game ----------');
console.log("'s' for Snake\n'w' for Water\n'g' for Gun\nYou have 8 chances\n");

let choices = ['s', 'w', 'g'];
let hum_points = 0;
let com_points = 0;
let chances = 8;

while (chances > 0) {
    console.log(`${chances} chances left...!`)
    let hum = prompt('Enter Your Choice : ');
    let com = choices[Math.floor(Math.random() * choices.length)];
    chances -= 1;

    if (com == 's' && hum == 'g') {
        console.log("Computer chosen 'Snake' and You chosen 'Gun'\nYou won a point...");
        hum_points += 1;
    }

    else if (com == 'w' && hum == 's') {
        console.log("Computer chosen 'Water' and You chosen 'Snake'\nYou won a point\n");
        hum_points += 1;
    }

    else if (com == 'g' && hum == 'w') {
        console.log("Computer chosen 'Gun' and You chosen 'Water'\nYou won a point\n");
        hum_points += 1;
    }

    else if (com == 's' && hum == 'w') {
        console.log("Computer chosen 'Snake' and You chosen 'Water'\nComputer won a point\n");
        com_points += 1;
    }

    else if (com == 'w' && hum == 'g') {
        console.log("Computer chosen 'Water' and You chosen 'Gun'\nComputer won a point\n");
        com_points += 1;
    }

    else if (com == 'g' && hum == 's') {
        console.log("Computer chosen 'Gun' and You chosen 'Snake'\nComputer won a point\n");
        com_points += 1;
    }

    else if (com == hum) {
        console.log('Tie\n');
    }

    else {
        console.log('Invalid input...\n');
    }
}

if (hum_points > com_points) {
    console.log(`You won this game with ${hum_points} points...`)
}
else if (hum_points < com_points) {
    console.log(`Computer won this game with ${com_points} points...`)
}
else if (hum_points == com_points) {
    console.log(`This game is tie with ${hum_points - com_points} points...`)
}