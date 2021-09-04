

//the function below passes both tests 

// function superbowlWin(record) {
//     let winningYear = record.find(element => element.result === "W")
//     //debugger;
//     // if (winningYear) {
//     // return winningYear.year;
//     // }
//     // else {
//     //     return undefined;
//     // }
//     return winningYear ? winningYear.year : winningYear;
// }






//the function below passes both tests
let superbowlWin = function (arrayOfObjects) {
    let winningYear = arrayOfObjects.find((game) => (
    game.result === "W"
    ))
    return winningYear ? winningYear.year : winningYear;
}

// //this one passes only the second test
// let superbowlWin = (arrayOfObjects) => arrayOfObjects.find(function(game) 
// {
//     let yearWon = game.result === "W";
//     let yearOnly = game.year;
//     return yearOnly; 
// })
