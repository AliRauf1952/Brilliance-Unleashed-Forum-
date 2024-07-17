const prompt = require('prompt-sync')();

console.log("Welcome to Multitalent Forum");

console.log("Please select from the following options:");
console.log("1. Quiz");
console.log("2. Guessing Number");
console.log("3. Thrilling Games");

const option1 = "1";
const option2 = "2";
const option3 = "3";

const choice = prompt('Enter your choice Number as 1 or 2 or 3: ');

let prizeMoney = 0;
/*Quiz Section */

if (choice === option1) {
    console.log("Welcome to the Thrilling Games!");
    console.log("Please select from the following options:");
   
    console.log("1. Quiz Related to Books");
    console.log("2. General Knowledge");
   
    const option1 = "1";
    const option2 = "2";
    
    const subChoice = prompt('Enter your choice Number as 1 or 2 : ');
/*Quiz Related to Books*/

if (subChoice === option1){
    let name = prompt('Enter your Name: ');
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function quiz() {
        let points = 0;
        const maxWrongAnswers = 3;
        let wrongAnswers = 0;
    
        const questions = [
            { type: "multiple", question: "Who wrote the novel 'Pride and Prejudice'?", options: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Mary Shelley"], answer: "Jane Austen" },
            { type: "multiple", question: "In which book series would you find the character Katniss Everdeen?", options: ["Divergent", "Twilight", "The Hunger Games", "Harry Potter"], answer: "The Hunger Games" },
            { type: "multiple", question: "Which of the following novels was written by George Orwell?", options: ["Brave New World", "Animal Farm", "Fahrenheit 451", "The Catcher in the Rye"], answer: "Animal Farm" },
            { type: "multiple", question: "The book 'To Kill a Mockingbird' is set in which fictional town?", options: ["Maycomb", "Macondo", "Gotham", "Springfield"], answer: "Maycomb" },
            { type: "multiple", question: "What is the first book in J.R.R. Tolkien's 'The Lord of the Rings' trilogy?", options: ["The Two Towers", "The Fellowship of the Ring", "The Return of the King", "The Silmarillion"], answer: "The Fellowship of the Ring" },
            { type: "truefalse", question: "The character Sherlock Holmes was created by Sir Arthur Conan Doyle.", answer: true },
            { type: "truefalse", question: "'The Great Gatsby' was written by Ernest Hemingway.", answer: false },
            { type: "truefalse", question: "The book '1984' is set in a dystopian future.", answer: true },
            { type: "truefalse", question: "J.K. Rowling wrote the 'Percy Jackson & the Olympians' series.", answer: false },
            { type: "truefalse", question: "'Moby-Dick' is a novel about a man's obsession with a giant whale.", answer: true }
        ];
    
        let shuffledQuestions = shuffleArray([...questions]);
    
        for (let i = 0; i < shuffledQuestions.length; i++) {
            console.log(shuffledQuestions[i].question);
    
            if (shuffledQuestions[i].type === "multiple") {
                // Display multiple-choice options
                for (let j = 0; j < shuffledQuestions[i].options.length; j++) {
                    console.log(`${j + 1}. ${shuffledQuestions[i].options[j]}`);
                }
    
                let answerIndex = parseInt(prompt('Enter your answer (number): ')) - 1;
                let answer = shuffledQuestions[i].options[answerIndex];
    
                if (answer.toLowerCase() === shuffledQuestions[i].answer.toLowerCase()) {
                    points += 10;
                    console.log("Correct! You earned 10 points.");
                    console.log("Your total points are:", points);
                } else {
                    wrongAnswers++;
                    console.log("Incorrect answer.");
                    console.log("Wrong answers count:", wrongAnswers);
    
                    if (wrongAnswers === maxWrongAnswers) {
                        console.log("You have reached the maximum number of wrong answers. Better luck next time!");
                        break;
                    }
                }
            } else if (shuffledQuestions[i].type === "truefalse") {
                let answer = prompt('Enter your answer (true/false): ');
    
                if (answer.toLowerCase() === shuffledQuestions[i].answer.toString().toLowerCase()) {
                    points += 10;
                    console.log("Correct! You earned 10 points.");
                    console.log("Your total points are:", points);
                } else {
                    wrongAnswers++;
                    console.log("Incorrect answer.");
                    console.log("Wrong answers count:", wrongAnswers);
    
                    if (wrongAnswers === maxWrongAnswers) {
                        console.log("You have reached the maximum number of wrong answers. Better luck next time!");
                        break;
                    }
                }
            }
        }
        console.log(`Participant Name: ${name}`);
        console.log("Quiz over! Your total points:", points);
       
    
        if (points >= 70) {
            console.log("Congratulations! You win $200.\n");
            prizeMoney = 200;
            shoppingCart();
        }
    }
    
    quiz();
    


}



/*General Knowledge */
   else if (subChoice === option2) {


    let name = prompt('Enter your Name: ');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function quiz() {
        let points = 0;
        const maxWrongAnswers = 3;
        let wrongAnswers = 0;

        const questions = [
            { question: "What is the capital of Germany?", answer: "Berlin" },
            { question: "What is the capital of France?", answer: "Paris" },
            { question: "What is the capital of Italy?", answer: "Rome" },
            { question: "What is the capital of Spain?", answer: "Madrid" },
            { question: "What is the capital of Portugal?", answer: "Lisbon" },
            { question: "What is the capital of Greece?", answer: "Athens" },
            { question: "What is the capital of Belgium?", answer: "Brussels" },
            { question: "What is the capital of Netherlands?", answer: "Amsterdam" },
            { question: "What is the capital of Austria?", answer: "Vienna" },
            { question: "What is the capital of Switzerland?", answer: "Bern" }
        ];

        let shuffledQuestions = shuffleArray([...questions]);

        for (let i = 0; i < shuffledQuestions.length; i++) {
            console.log(shuffledQuestions[i].question);
            let answer = prompt('Enter your answer: ');

            if (answer.toLowerCase() === shuffledQuestions[i].answer.toLowerCase()) {
                points += 10;
                console.log("Correct! You earned 10 points.");
                console.log("Your total points are:", points);
            } else {
                wrongAnswers++;
                console.log("Incorrect answer.");
                console.log("Wrong answers count:", wrongAnswers);

                if (wrongAnswers === maxWrongAnswers) {
                    console.log("You have reached the maximum number of wrong answers. Better luck next time!");
                    break;
                }
            }
        }

        console.log(`Participant Name: ${name}`);
        console.log("Quiz over! Your total points:", points);

        if (points >= 70) {
            console.log("Congratulations! You win $200.\n");
            prizeMoney = 200;
            shoppingCart();
        }
    }

    quiz();
}
else {
    console.log("Invalid Choice");
}


} 
/* Guessing Number*/

else if (choice === option2) {
    console.log("Welcome to the Guessing Number Game!");
    let name = prompt('Enter your Name: ');

    let counter = 0;
    let guessedCorrectly = false;
    while (counter < 5) {
        const play = prompt('Do you want to play? (y/n): ');
        if (play.toLowerCase() !== 'y') {
            break;
        }
        counter += 1;
        console.clear();
        let number = parseFloat(prompt("Guess the number between 1 and 100: "));

        const randomNumber = Math.floor(Math.random() * 101);
        if (number < 0 || number > 100 || isNaN(number)) {
            console.log('Invalid input. Please enter a number between 1 and 100.');
            break;
        } else {
            console.log(`The Random number is ${randomNumber}`);
            if (number === randomNumber) {
                console.log(`Congratulations, ${name}! You guessed the number correctly!`);
                guessedCorrectly = true;
                prizeMoney = 200;
                console.log("Congratulations! You are a winner and have $200 credit.");
                shoppingCart();
                break;
            } else {
                console.log("Next time be lucky!");
            }
        }
    }

    if (!guessedCorrectly && counter === 5) {
        console.log("Better luck next time!");
    }

} 
/* Thrilling Games */

else if (choice === option3) {
    console.log("Welcome to the Thrilling Games!");
    console.log("Please select from the following options:");
   
    console.log("1. Fighting Game");
    console.log("2. Tic-Tac-Toe");
   
    const option1 = "1";
    const option2 = "2";
    
    const subChoice = prompt('Enter your choice Number as 1 or 2 : ');

/*Free Style fighting */

    if (subChoice === option1) {
        function fight() {
            let fighter1 = prompt("Enter Fighter 1's name: ");
            let fighter2 = prompt("Enter Fighter 2's name: ");

            let power1 = 100;
            let power2 = 100;
            const moves = {
                jab: 5,
                hammerfist: 10,
                kick: 15,
                choke: 20
            };
            let turn = 1;

            while (power1 > 0 && power2 > 0) {
                if (turn === 1) {
                    let move = prompt(`${fighter1}, enter your move (jab/hammerfist/kick/choke): `);
                    if (moves[move] !== undefined) {
                        power2 -= moves[move];
                        console.log(`${fighter1} uses ${move} on ${fighter2} and ${fighter2}'s new power is ${power2}`);
                        turn = 2; 
                    } else {
                        console.log("Invalid move, try again.");
                    }
                } else {
                    let move = prompt(`${fighter2}, enter your move (jab/hammerfist/kick/choke): `);
                    if (moves[move] !== undefined) {
                        power1 -= moves[move];
                        console.log(`${fighter2} uses ${move} on ${fighter1} and ${fighter1}'s new power is ${power1}`);
                        turn = 1; 
                    } else {
                        console.log("Invalid move, try again.");
                    }
                }
            }

            if (power1 <= 0) {
                console.log(`${fighter1} is knocked out! ${fighter2} wins!`);
                console.log("Winner gets $200!\n");
                prizeMoney = 200;
                shoppingCart();
            } else if (power2 <= 0) {
                console.log(`${fighter2} is knocked out! ${fighter1} wins!`);
                console.log("Winner gets $200!\n");
                prizeMoney = 200;
                console.log("Congratulations! You are a winner and have $200 credit.");
                shoppingCart();
            }
        }

        fight();

    } 
    
    /* tic-toe game */
    
    else if (subChoice === option2) {
        let rows = parseInt(prompt("Enter the number of rows:"));
        let columns = parseInt(prompt("Enter the number of columns:"));

        let player1Name = prompt("Enter the name of Player 1:");
        let player2Name = prompt("Enter the name of Player 2:");

        let matrix = [];

        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < columns; j++) {
                matrix[i][j] = 0;
            }
        }

        function printMatrix() {
            console.log("Current matrix:");
            for (let i = 0; i < rows; i++) {
                console.log(matrix[i].join("\t"));
            }
        }

        function checkWin(player) {
            for (let i = 0; i < rows; i++) {
                let count = 0;
                for (let j = 0; j < columns; j++) {
                    if (matrix[i][j] === player) {
                        count++;
                        if (count === 3) {
                            return true;
                        }
                    } else {
                        count = 0;
                    }
                }
            }

            for (let j = 0; j < columns; j++) {
                let count = 0;
                for (let i = 0; i < rows; i++) {
                    if (matrix[i][j] === player) {
                        count++;
                        if (count === 3) {
                            return true;
                        }
                    } else {
                        count = 0;
                    }
                }
            }

            return false;
        }

        let turn = 1;
        let totalCells = rows * columns;
        let cellsFilled = 0;
        let winner = null;

        while (cellsFilled < totalCells) {
            printMatrix();

            if (turn === 1) {
                let rowIndex = parseInt(prompt(`${player1Name}, enter row index (0 to ${rows - 1}):`));
                let columnIndex = parseInt(prompt(`${player1Name}, enter column index (0 to ${columns - 1}):`));

                if (rowIndex >= 0 && rowIndex < rows && columnIndex >= 0 && columnIndex < columns && matrix[rowIndex][columnIndex] === 0) {
                    let value = prompt(`${player1Name}, enter value for element at row ${rowIndex}, column ${columnIndex} (enter 'X'):`);
                    if (value === "X") {
                        matrix[rowIndex][columnIndex] = value;
                        cellsFilled++;
                        if (checkWin('X')) {
                            printMatrix();
                            winner = player1Name;
                            break;
                        }
                        turn = 2;
                    } else {
                        console.log("Invalid input. Please enter 'X'.");
                    }
                } else {
                    console.log("Invalid input or cell already filled. Please try again.");
                }
            } else if (turn === 2) {
                let rowIndex = parseInt(prompt(`${player2Name}, enter row index (0 to ${rows - 1}):`));
                let columnIndex = parseInt(prompt(`${player2Name}, enter column index (0 to ${columns - 1}):`));

                if (rowIndex >= 0 && rowIndex < rows && columnIndex >= 0 && columnIndex < columns && matrix[rowIndex][columnIndex] === 0) {
                    let value = prompt(`${player2Name}, enter value for element at row ${rowIndex}, column ${columnIndex} (enter '✓'):`);
                    if (value === "✓") {
                        matrix[rowIndex][columnIndex] = value;
                        cellsFilled++;
                        if (checkWin('✓')) {
                            printMatrix();
                            winner = player2Name;
                            break;
                        }
                        turn = 1;
                    } else {
                        console.log("Invalid input. Please enter '✓'.");
                    }
                } else {
                    console.log("Invalid input or cell already filled. Please try again.");
                }
            }
        }

        if (winner) {
            printMatrix();
            console.log(`${winner} wins $200!`);
            prizeMoney = 200;
            console.log("Congratulations! You are a winner and have $200 credit.");
            shoppingCart();
          
        } else {
            console.log("It's a draw.");
        }

      
    } else {
        console.log("Invalid Choice");
    }

} else {
    console.log("Invalid Choice");
}






/* Shopping Cart */
function shoppingCart() {
  
    console.log("Congratulations! Welcome to Our Online Shop . You can buy different Items like jeans ,shirts ,hat ,shoes etc.");
    const products = [
        { type: "t-shirt", color: "white", price: 19.99 },
        { type: "jeans", color: "blue", price: 39 },
        { type: "hat", color: "red", price: 9 },
        { type: "t-shirt", color: "yellow", price: 19 },
        { type: "t-shirt", color: "red", price: 29 },
        { type: "jeans", color: "blue", price: 19 },
        { type: "shirt", color: "yellow", price: 19 },
        { type: "shoes", color: "green", price: 49 },
        { type: "sandals", color: "brown", price: 12 },
        { type: "jeans", color: "grey", price: 22 },
        { type: "hat", color: "red", price: 19 },
    ];

    let totalExpenses = 0;
    let purchasedItems = [];

    while (prizeMoney > 0) {
        let itemType = prompt('Enter the type of item you want to buy: ').toLowerCase();
        let itemColor = prompt('Enter the color of the item you want to buy: ').toLowerCase();
        
        let itemQuantity;
        while (true) {
            itemQuantity = parseInt(prompt('Enter the quantity you want to buy: '), 10);
            if (isNaN(itemQuantity) || itemQuantity <= 0) {
                console.log('Invalid quantity. Please enter a positive number.');
            } else {
                break;
            }
        }

        let filteredProducts = products.filter(product => 
            product.type.toLowerCase() === itemType && product.color.toLowerCase() === itemColor
        );

        if (filteredProducts.length > 0) {
            let unitPrice = filteredProducts[0].price;
            let totalPrice = unitPrice * itemQuantity;

            if (totalPrice <= prizeMoney) {
                console.log(`You have selected ${itemQuantity} ${itemType}(s) of color ${itemColor} with a total price of $${totalPrice.toFixed(2)}`);
                prizeMoney -= totalPrice;
                totalExpenses += totalPrice;
                for (let i = 0; i < itemQuantity; i++) {
                    purchasedItems.push(filteredProducts[0]);
                }
                console.log(`Remaining prize money: $${prizeMoney.toFixed(2)}`);
            } else {
                console.log(`The total price of the selected products exceeds your prize money. You have $${prizeMoney.toFixed(2)} left.`);
            }
        } else {
            console.log(`No products found for type: ${itemType} and color: ${itemColor}`);
        }

        if (prizeMoney > 0) {
            let continueShopping = prompt('Do you want to continue shopping? (yes/no): ').toLowerCase();
            if (continueShopping !== 'yes') {
                break;
            }
        }
    }

    console.log('Shopping Summary:\n');
    console.log(`Total Expenses: $${totalExpenses.toFixed(2)}`);
    console.log(`Remaining Prize Money: $${prizeMoney.toFixed(2)}`);
    console.log(`Total Money Utilized: $${(200 - prizeMoney).toFixed(2)}`);
    console.log('Purchased Items:');
    purchasedItems.forEach(item => {
        console.log(`- ${item.type} (${item.color}) - $${item.price.toFixed(2)}`);
    });
}
