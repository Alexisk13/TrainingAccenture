var database = [
    {
        username: "Aleksis",
        password: "1234"
    },
    {
        username: "Andris",
        password: "123"
    },
    {
        username: "Maris",
        password: "12345"
    },
    {
        username: "Ieva",
        password: "1234"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired."
    },
    {
        username: "Sally",
        timeline: "Javascript is soooo cooool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

function isUserValid(username, password){
    for (var i = 0; i<database.length; i++){
        if (database[i].username === username && database[i].password === password){
            return true;
        }
    }   
    return false;
}

function signIn(username, password){
    console.log(isUserValid(username, password));
    if (isUserValid(username, password)){
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password"); 
    }
}

signIn(userNamePrompt, passwordPrompt)